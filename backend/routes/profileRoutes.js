const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json());
const fileUpload = require("../utils/fileUpload");
const { addProfile, getProfile } = require("../controllers/profile/profileController")
Router.post("/addProfile", fileUpload("profile").array("photo", 5), addProfile);
//Router.get("/", getProfile);
module.exports = Router