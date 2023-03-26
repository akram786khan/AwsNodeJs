const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())

const { addemploye, getemploye, getemployefindByid, deleteemploye, updateemploye } = require("../controllers/employeController/employecontroller")
Router.post("/", addemploye)
Router.get("/", getemploye)
Router.get("/:_id", getemployefindByid);
Router.put("/:_id", updateemploye)
Router.delete("/:_id", deleteemploye)

module.exports = Router