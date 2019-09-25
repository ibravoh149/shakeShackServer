import mongoose, { Schema } from 'mongoose';
import { schemaOptions } from "./schemaOptions";
const ObjectId: any = Schema.Types.ObjectId;

const business = {
  name:String,
  owner:{
    type:ObjectId,
    ref:"user"
  }, 
  description:String,
  businessDays:[
    {
      day:String,
      openingHour:String,
      closingHour:String
    }
  ]
}

const businessSchema = new Schema(business, schemaOptions)

export default mongoose.model('business', businessSchema);