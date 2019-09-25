import mongoose, { Schema } from 'mongoose';
import { schemaOptions } from "./schemaOptions";

const ObjectId: any = Schema.Types.ObjectId;

const  PromotionalEmailsList={
  userId:{
    type:ObjectId,
    ref:"user"
  }
}

const promotionalEmailsListSchema = new Schema(PromotionalEmailsList, schemaOptions)

export default mongoose.model('promotionalEmailList', promotionalEmailsListSchema);