import mongoose, { model, Schema } from 'mongoose'
import { TodoDocument } from './Todo'

export type UserDocument = mongoose.Document & {
  name: string,
  surname: string,
  email: string,
  facebook: string,
  twitter: string,
  google: string,
  password: string,
  todos: Array<TodoDocument>,
};

const schema = new Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  facebook: String,
  twitter: String,
  google: String,
  password: {type: String, required: true},
  todos: [{type: Schema.Types.ObjectId, ref: 'Todo'}]
}, {timestamps: true})

export default model<UserDocument>('User', schema)