const {Schema, model} = require("mongoose")

const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = model("Todo", schema)