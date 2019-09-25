import mongoose, { Schema } from 'mongoose';
import { schemaOptions } from "./schemaOptions";
const ObjectId: any = Schema.Types.ObjectId;

const location = {
  adress:String,
  city:String,
  zipCode:String,
  stateId:{
    type:ObjectId,
    ref:"state"
  },

  model:{
    type: ObjectId,
    // will look at the `onModel` property to find the right model. e.g task, transaction, proposal e.t.c
    refPath: 'onModel',
    autoPopulate:true
  },

  onModel: {
    type: String,
    // can be either of the document in the enum
    enum: ["business"]
  }, 

  points:{
    type:{
      type:{
        type:String,
        enum:["Point"],
        required:true
      },
    
      coordinates: {
        type: [Number],
        required: true
      }
    }
  },

  
}

const locationSchema = new Schema(location, schemaOptions)

export default mongoose.model('location', locationSchema);