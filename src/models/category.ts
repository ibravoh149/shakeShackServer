import mongoose, { Schema } from 'mongoose';
import { schemaOptions } from "./schemaOptions";

const category = {
  name:String,
}

const categorySchema = new Schema(category, schemaOptions)

export default mongoose.model('category', categorySchema);