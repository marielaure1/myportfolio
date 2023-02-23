import type { NextApiRequest, NextApiResponse } from 'next'

import { dbConnect } from '@/utils/mongodb/db-connect'
import  WorkModel from '@/utils/mongodb/model'

import { IWork } from '@/@types/work.js'



type Data = {

    works?: IWork[]

    work?: IWork

    message: string

}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { title, seo, slug, description, coverImage } = req.body
    const authHeader = req.headers['authorization']
    const id = authHeader && authHeader.split(' ')[1]

    if (req.method === 'GET') {
        

        try {

            dbConnect()

            const works = await WorkModel.findOne({'id': id})

            if(!works){
                throw new Error("Error Work")
            }

            return res.status(200).json({ works, message: 'OK' })

        } catch (error) {

            console.log(error)
            var message = `Une erreur c'est produite, veuillez réessayer!`
            var code = 500

            if(error.message == "Error Work"){
                message = `Ce projet n'existe pas !`
                code = 409
            }
            
            return res.status(code).json({
                message,
            })

        }

    }

    if (req.method === 'PUT') {

        try{

            // Connexion à la base de donnée
            dbConnect()

            const foundWork = await WorkModel.findOne({'id': id})

            if(!foundWork){
                throw new Error('foundWork')
            }

            // Vérification que tous les champs sont remplie
            if (!title || !seo.title || !seo.description || !slug || !description || !coverImage){

                const error = {title: title, seo: {title: seo.title, description: seo.description}, slug: slug, description: description, coverImage: coverImage}

                throw new Error("Error Champs")
            }


            const updateWork = await WorkModel.updateOne({'id': id}, { $set : { title: title, seo: {title: seo.title, description: seo.description}, slug: slug, description: description, coverImage: coverImage}})

            if(!updateWork){
                throw new Error('Update Work')
            }

            return res.status(201).json({ message: `Le projet ${foundWork.title} a bien été modifié`})


        } catch(error){
            console.log(error)
            var message = `Une erreur c'est produite, veuillez réessayer!`
            var code = 500

            if(error.message == "foundWork"){
                message = `Ce projet n'existe pas !`
                code = 409
            }

            if(error.message == "Error Champs"){
                message = `Vous devez remplir tous les champs !`
                code = 409
            }

            if(error.message == "Update Work"){
                message = `Le projet n'as pas pu être modifier, veuillez réessayer !`
                code = 409
            }

            return res.status(code).json({
                message,
            })
        }

        

    }

    if (req.method === 'DELETE') {

        try {

            dbConnect()

            const works = await WorkModel.deleteOne({'_id': id})

            return res.status(200).json({ works, message: 'OK' })

        } catch (error) {

            console.error(error)

            return res.status(500).json({ message: 'Internal server error' })

        }

    }

}



export default handler
