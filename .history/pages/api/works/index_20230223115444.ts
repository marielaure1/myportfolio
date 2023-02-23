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


    if (req.method === 'POST') {

        // Connexion à la base de donnée
        dbConnect()

        try{
            // Vérification que tous les champs sont remplie
            if (!title || !seo.title || !seo.description || !slug || !description || !coverImage){

                const error = {title: title, seo: {title: seo.title, description: seo.description}, slug: slug, description: description, coverImage: coverImage}

                throw new Error("Error Champs")
            }

            const workCreate = await WorkModel.create(req.body)

            if(!workCreate){
                throw new Error("Error Create")
            }

            return res.status(201).json({ message: 'POST' })


        } catch(error){
            var errorMessage = error
            var message = `Une erreur c'est produite, veuillez réessayer!`
            var code = 500

            if(errorMessage.message == "Error Champs"){
                message = `Vous devez remplir tous les champs !`
                code = 409
            }

            if(error == "Error Create"){
                message = `Le projet n'as pas pu être créer, veuillez réessayer !`
                code = 409
            }

            return res.status(code).json({
                message,
            })
        }

    }

    if (req.method === 'GET') {

        try {

            dbConnect()

            const works = await WorkModel.find({})



            return res.status(200).json({ works, message: 'OK' })

        } catch (error) {

            console.error(error)

            return res.status(500).json({ message: 'Internal server error' })

        }

    }

}



export default handler
