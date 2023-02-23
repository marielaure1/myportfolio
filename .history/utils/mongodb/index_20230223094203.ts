import mongoose from 'mongoose'
import { models, model, Schema } from 'mongoose'



const WorkSchema: Schema = new Schema({

    title: {

        type: String,

        required: true,

        unique: true,

    },

    seo: {

        title: { type: String, required: true },

        description: { type: String, required: true },

    },

    slug: { type: String, required: true, unique: true },

    description: {

        type: String,

        required: true,

    },

    coverImage: {

        type: String,

        required: true,

    },

})



const WorkModel = models.Work || model('Work', WorkSchema)



export default WorkModel

const { MONGODB_URI } = process.env

if (!MONGODB_URI) throw new Error('MONGO_URI is not defined.')

console.log('utils/mongodb/db-connect/index.ts > MONGODB_URI >', MONGODB_URI)

let cached = global.mongoose

if (!cached) cached = global.mongoose = { conn: null }



export const dbConnect = async () => {

    if (cached.conn) return cached.conn



    cached.conn = await mongoose.connect(MONGODB_URI)



    return cached.conn

}