const mongoose = require('mongoose');

const connectDB = async (URI) => {
    try {
        console.log("Connect to Mongodb Atlas");
        mongoose.connect(URI);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;