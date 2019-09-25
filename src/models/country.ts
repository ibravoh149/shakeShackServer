import mongoose, { Schema } from 'mongoose';
import { schemaOptions } from "./schemaOptions";
const ObjectId: any = Schema.Types.ObjectId;

const country = {
  name:String
}

const countrySchema = new Schema(country, schemaOptions)
export default mongoose.model('country', countrySchema);