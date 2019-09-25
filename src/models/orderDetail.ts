import mongoose, { Schema } from "mongoose";
import { schemaOptions } from "./schemaOptions";
const ObjectId: any = Schema.Types.ObjectId;

const orderDetail = {
 mealId:{
   type:ObjectId,
   ref:"meal",
   required:true
 },
 orderId:{
  type:ObjectId,
  ref:"order",
  required:true
},
mealContent:[Schema.Types.Mixed],
customizableContent:[Schema.Types.Mixed],
quantity:{type:Number, required:true},
cost:{type:Number, required:true}
 
};

const orderDetailSchema = new Schema(orderDetail, schemaOptions);

export default mongoose.model("orderDetail", orderDetailSchema);
