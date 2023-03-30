import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/utils/mongodb/db-connect'
import  WorkModel from '@/utils/mongodb/model'
import { IWork } from '@/@types/work.js'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

type Data = {
    works?: IWork[]
    work?: IWork
    message: string
}


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions)

    const { title, seo, slug, description, coverImage } = req.body

    console.log(req.body);
    


    if (req.method === 'POST') {

        if(!session) return res.status(401)

        try{

            // Connexion à la base de donnée
            dbConnect()

            // Vérification que tous les champs sont remplie
            if (!title || !seo.title || !seo.description || !slug || !description || !coverImage){

                const error = {title: title, seo: {title: seo.title, description: seo.description}, slug: slug, description: description, coverImage: coverImage}

                throw new Error("Error Champs")
            }

            const workCreate = await WorkModel.create(req.body)

            if(!workCreate){
                throw new Error("Error Create")
            }

            return res.status(201).json({ message: `Le projet ${workCreate.title} a bien été créé`})


        } catch(error: any){
            console.log(error)
            let message = `Une erreur c'est produite, veuillez réessayer!`
            let code = 500

            if(error.message == "Error Champs"){
                message = `Vous devez remplir tous les champs !`
                code = 409
            }

            if(error.message == "Error Create"){
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

            if(!works){
                throw new Error("Error All Works")
            }

            return res.status(200).json({ works, message: 'OK' })

        } catch (error: any) {

            console.log(error)
            let message = `Une erreur c'est produite, veuillez réessayer!`
            let code = 500

            if(error.message == "Error All Works"){
                message = `Aucun projet n'a été trouvé !`
                code = 409
            }
            
            return res.status(code).json({
                message,
            })

        }

    }

}



export default handler
