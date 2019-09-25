import mongoose, { Schema } from "mongoose";
import { schemaOptions } from "./schemaOptions";
const ObjectId: any = Schema.Types.ObjectId;

const meal = {
  name: { type: String, required: true },
  businessId: {
    type: ObjectId,
    ref: "business",
    required: true
  },
  description: String,
  price: { type: Number, required: true },
  calories: String,
  categoryId: {
    type: ObjectId
  },
  mealContent: [
    {
      name: String,
      price: Number,
      calories: String
    }
  ],
  customizableContent:[
    {
      name:String,
      price:Number
    }
  ]
};

const mealSchema = new Schema(meal, schemaOptions);

export default mongoose.model("meal", mealSchema);
