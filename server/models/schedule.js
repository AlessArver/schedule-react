const {Schema, model} = require("mongoose")

const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = model("Schedule", schema)