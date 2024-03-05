const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { createUser: createUserController } = require('./controller/users.js');

const app = express();
const Mongodb = MongoClient;
const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/facebook', { useNewUrlParser: true, useUnifiedTopology: true });
const cors = require('cors');
app.use(express.static('public'));
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to handle the POST or PATCH request
const signupRoutes = require('./routes/users.js');
app.use('/signup', signupRoutes);


// app.post('/signup', async (req, res) => {
//   const { email, username, password, confirmPassword, photo } = req.body;
//   const message = await createUserController(email, username, password, confirmPassword, photo);
//   res.json(message);
// });

app.listen(80);
