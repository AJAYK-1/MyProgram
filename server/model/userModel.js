const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String }
}, { timestamps: true })

const User = mongoose.model("User_tbl", userSchema)

module.exports = User