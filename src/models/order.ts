import mongoose, { Schema } from "mongoose";
import { schemaOptions } from "./schemaOptions";
const ObjectId: any = Schema.Types.ObjectId;

const order = {
  totalAmount: { type: Number, required: true },
  pickupTime: Date,
  customer: {
    type: ObjectId,
    ref: "user",
    required: true
  },
  status: {
    type: String,
    default: "Processing",
    enum: ["processing", "completed", "delivered"]
  },
  comments: String,
  referenceCode: String
};

const orderSchema = new Schema(order, schemaOptions);

export default mongoose.model("order", orderSchema);
