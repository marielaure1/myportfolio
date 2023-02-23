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

    if (req.method === 'GET') {

        try {

            dbConnect()

            const works = await WorkModel.findOne({})

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

        const foundWork = await Creneaux.findOne({'dateStart':dateStart}, {'dateEnd':dateEnd}, {'prestation': prestation})

            if(!foundCreneaux){
                throw new Error('foundCreneaux')
            }

        return res.status(201).json({ message: 'PUT' })

    }

    if (req.method === 'DELETE') {

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
