const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');

//homepage for employee api
router.get('/', (req, res) => {
    try {
        res.status(200).json({
            message: "Welcome to Employee REST API home page"
        })
    } catch (error) {
        console.log(error);
    }
})

//find all employeess
router.get('/getAll', async (req, res) => {
    try {
        const data = await Employee.find({});
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

//find an employee by query params
router.get('/get', async (req, res) => {
    try {
        const data = await Employee.find(req.query);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

//save a employee
router.post('/save', async (req, res) => {
    const data = new Employee({
        name: req.body.name,
        employeeID: req.body.employeeID,
        email: req.body.email,
        company: req.body.company,
        designation: req.body.designation,
        skills: req.body.skills
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
})

//update an employee by id
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true }
        const result = await Employee.findByIdAndUpdate(id, updatedData, options);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
})

//delete an employee by id
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Employee.findByIdAndDelete(id);
        res.status(200).json(`Employee details of with ${data.name} has been deleted successfully!`);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;