

import { models, model, Schema } from 'mongoose';
import { IWork, Image } from '@/@types/work';

const ImageSchema: Schema = new Schema<Image>({
  id: { 
    type: String, 
    required: true 
  },
  url: { 
    type: String, 
    required: true 
  },
  width: { 
    type: Number, 
    required: true 
  },
  height: { 
    type: Number, 
    required: true 
  },
});

const WorkSchema: Schema = new Schema<IWork>({
  title: { 
    type: String, 
    required: true, 
    unique: true 
  },
  seo: {
    title: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String, 
      required: true 
    },
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true 
  },
  coverImage: {
    id: { 
      type: String, 
      required: true 
    },
    url: { 
      type: String, 
      required: true 
    },
    width: { 
      type: Number, 
      required: true 
    },
    height: { 
      type: Number, 
      required: true 
    }
  },
  galerieImage: { 
    type: [ImageSchema],
     required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  published: { 
    type: Boolean, 
    required: true 
  },
  link: { 
    type: String ,
    default: ""
  },
  category: { 
    type: String,
    default: "" 
  },
  github: {
    type: String,
    default: ""
  }, 
  figma: {
    type: String,
    default: ""
  },
  colorbg: {
    type: String,
    default: ""
  },
  colortxt: {
    type: String,
    default: ""
  }
});


const WorkModel = models.Work || model<IWork>('Work', WorkSchema);

export default WorkModel;
