const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    schedules: [{type: Types.ObjectId, ref: "Schedule"}],
    todos: [{type: Types.ObjectId, ref: "Todo"}]
})

module.exports = model("User", schema)