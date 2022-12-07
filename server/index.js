

const express = require('express')
const mongoose = require('mongoose');
const userModel = require('./models/userSchema');
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000
const BASE_URI = `mongodb+srv://HamzaIlyas:hamza12345@crudcluster.hqiifvh.mongodb.net/Crud-Applicaition`

mongoose.connect(BASE_URI)
    .then(res => {
        console.log('Mongo DB Connected');
    })
    .catch(err => {
        console.log('error ==> ', err);
    })

app.use(express.json())
app.use(cors())


app.post('/api/user', (request, response) => {
    console.log('body ', request.body);
    console.log('request', request);
    userModel.create(request.body, (error, users) => {
        if (error) {
            response.json({
                message: `error ${error}`
            })
        }
        else {
            response.json({
                message: 'Create User',
                users,
            })
        }
    })
})


app.get('/api/user', (request, response) => {
    userModel.find({}, (err, users) => {
        if (err) {
            response.json({
                message: `error ${err}`
            })
        }
        else {
            response.json({
                message: 'Get Users',
                users,
            })
        }
    })
})

app.put('/api/user', (request, response) => {
    const id = request.body.id
    userModel.findByIdAndUpdate(id, request.body, {new: true}, (err, user) => {
        if (err) {
            response.json({
                message: `error ${err}`
            })
        }
        else {
            response.json({
                message: 'Update User',
                user,
            })
        }
    })
})


app.delete('/api/user/:id', (request, response) => {
    const { id } = request.params
    userModel.findByIdAndDelete(id, (err, user) => {
        if (err) {
            response.json({
                message: `error ${err}`
            })
        }
        else {
            response.json({
                message: 'Delete User',
                user,
            })
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:5000`);
})


