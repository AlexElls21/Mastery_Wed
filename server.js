require('dotenv').config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require('passport-auth0');

const app = express();

app.use(bodyParser.json());

const PORT = 3038
app.listen(PORT, console.log(`listening on port: ${PORT}`))