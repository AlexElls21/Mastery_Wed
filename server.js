require('dotenv').config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require('passport-auth0');

const animalController = require('./controller/animals')

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log("Connected to DB")
    app.set('db', db)
})

app.get('/api/get', animalController.getAnimals);
app.post('/api/add', animalController.addAnimals);
app.put('/api/update/:id/:name', animalController.updateAnimals);
app.delete('/api/delete/:id', animalController.deleteAnimals);




const PORT = 3038
app.listen(PORT, console.log(`listening on port: ${PORT}`))