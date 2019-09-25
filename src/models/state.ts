import mongoose, { Schema } from 'mongoose';
import { schemaOptions } from "./schemaOptions";
const ObjectId: any = Schema.Types.ObjectId;

const states = {
  name:String,
  countryId:{
    type:ObjectId,
    ref:"country"
  }
}

const statesSchema = new Schema(states, schemaOptions)
export default mongoose.model('state', statesSchema);