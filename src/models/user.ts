import mongoose, { Schema } from 'mongoose';
import { schemaOptions } from "./schemaOptions";

const user = {

  firstName: {
    type: String
  },

  lastName: {
    type: String
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
  },

  phoneNumber:String,
  
  zipCode:String,
  
  role: {
    type: String,
    enum: ['customer', 'admin', "manager"]
  },

  verificationToken: {
    type: String,
    default: null
  },

  resetPasswordToken: {
    type: String,
    default: null
  },

  resetPasswordExpires: {
    type: Date,
    default: null
  }

}

const userSchema = new Schema(user, schemaOptions)

export default mongoose.model('user', userSchema);