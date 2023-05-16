require('dotenv').config();
const express = require('express');
const connectDB = require('./db/db.connect');
const app = express();
const employee_routes = require('./routes/employee.routes');

//declaring port value using .env
const PORT = process.env.PORT;

//for parsing the json
app.use(express.json());

//middleware
app.use('/api/v1/employee', employee_routes);

//homepage
app.get('/', (req, res) => {
    try {
        res.status(200).json({
            message: "Welcome to 2nd project on REST API + CRUD operations"
        });
    } catch (error) {
        console.log(error);
    }
})

//Start menthood to start the application
const start = async () => {
    try {
        await connectDB(process.env.DATABASE_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes, I am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();