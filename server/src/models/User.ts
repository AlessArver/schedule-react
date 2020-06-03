import mongoose, { model, Schema, Types } from 'mongoose'
import { ScheduleDocument } from './Schedule'
import { TodoDocument } from './Todo'

export type UserDocument = mongoose.Document & {
  name: string,
  surname: string,
  email: string,
  facebook: string,
  twitter: string,
  google: string,
  password: string,
  schedules: Array<ScheduleDocument>,
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
  schedules: [{type: Schema.Types.ObjectId, ref: 'Schedule'}],
  todos: [{type: Schema.Types.ObjectId, ref: 'Todo'}]
}, {timestamps: true})

export default model<UserDocument>('User', schema)