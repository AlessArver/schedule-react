import mongoose, { Schema, Types } from 'mongoose'

export type ScheduleDocument = mongoose.Document & {
  owner: string
  text: string
};

const schema = new mongoose.Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  text: {type: String, required: true}
}, {timestamps: true})

const Schedule = mongoose.model<ScheduleDocument>('Schedule', schema)
export default Schedule
