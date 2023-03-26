const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const { getCountry, addCountry, getCountryfindByid } = require('../controllers/countryController.js/countryController')

Router.get("/Country", getCountry);
Router.post("/Country", addCountry);
Router.get("/Country/:_id", getCountryfindByid);


module.exports = Router