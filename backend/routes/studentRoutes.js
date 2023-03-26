const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json());
const { addstudent, getstudent, getstudentfindByid, deletestudent, updatestudent, getCourse, addCourse, getCoursefindByid } = require("../controllers/studentController/studentcontroller")
Router.post("/", addstudent);
Router.get("/", getstudent);
Router.get("/:_id", getstudentfindByid);
Router.put("/:_id", updatestudent);
Router.delete("/:_id", deletestudent);

Router.get("/Course", getCourse);
Router.post("/Course", addCourse);
Router.get("/Course/:_id", getCoursefindByid);
module.exports = Router