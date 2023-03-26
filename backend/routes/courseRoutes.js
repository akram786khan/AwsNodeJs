const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const { getCourse, addCourse, getCoursefindByid } = require('../controllers/studentController/studentcontroller')

Router.get("/Course", getCourse);
Router.post("/Course", addCourse);
Router.get("/Course/:_id", getCoursefindByid);


module.exports = Router