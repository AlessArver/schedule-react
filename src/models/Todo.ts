import mongoose, { Schema, Types } from 'mongoose'

export type TodoDocument = mongoose.Document & {
  owner: string
  text: string
  isCompleted: boolean
};

const schema = new mongoose.Schema({
  owner: {type: Schema.Types.ObjectId, ref: "User"},
  text: {type: String, required: true},
  isCompleted: {type: Boolean, default: false, required: true},
}, {timestamps: true})

export default mongoose.model<TodoDocument>('Todo', schema)