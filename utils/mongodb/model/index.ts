import { models, model, Schema } from 'mongoose'
import { IWork, Image } from '@/@types/work'

const WorkSchema: Schema = new Schema<IWork>({

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

        type: [{}],

        required: true,

    },

})

const WorkModel = models.Work || model<IWork>('Work', WorkSchema)

export default WorkModel