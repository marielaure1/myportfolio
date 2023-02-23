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
        } catch(error){
            var message = `Une erreur c'est produite, veuillez réessayer!`
            var code = 500

            if(error == "Error Champs"){
                message = `Vous devez !`
                code = 409
            }

            return res.status(code).json({
                message,
            })
        }

        

        const workCreate = await WorkModel.create(req.body)

        if(!workCreate){
            throw 
        }

        return res.status(201).json({ message: 'POST' })

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
