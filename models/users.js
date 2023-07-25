const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String
}, {
    timestamps: true
})



module.exports = mongoose('User', userSchema)