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

    if (req.method === 'POST') {

        // Connexion à la base de donnée
        dbConnect()

        if(verifDateStart == "Invalid Date" && verifDateEnd == "Invalid Date"){
                
            return res.json({
                message: `Veuillez saisir une date de début et de fin valide.`
            })
        } else if(verifDateStart == "Invalid Date"){
            
            return res.json({
                message: `Veuillez saisir une date de début valide.`
            })
        } else if(verifDateEnd == "Invalid Date"){
            
            return res.json({
                message: `Veuillez saisir une date de fin valide.`
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
