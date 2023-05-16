const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employeeID: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email already exists in database!']
    },
    company: {
        type: String
    },
    designation: {
        type: String,
        default: "Application Support"
    },
    skills: {
        type: Array,
        default: ['AMS']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Employee', employeeSchema);