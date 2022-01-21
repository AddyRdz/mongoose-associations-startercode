const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        default: "Anonymous",
        required: true
    }
})

const Author = mongoose.model("Author", authorSchema)

module.exports = Author