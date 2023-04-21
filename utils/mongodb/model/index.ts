

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
    type: String 
  },
  category: { 
    type: String 
  },
  github: {
    type: String
  }, 
  figma: {
    type: String
  }
});

const WorkModel = models.Work || model<IWork>('Work', WorkSchema);

export default WorkModel;
