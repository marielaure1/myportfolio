import type { NextApiRequest, NextApiResponse } from 'next'

import { dbConnect, WorkModel } from '@/utils/mongodb/'

import { IWork } from '@/@types/work'



type Data = {

    works?: IWork[]

    work?: IWork

    message: string

}



const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {

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
