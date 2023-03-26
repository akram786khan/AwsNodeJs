

const mongoose = require("mongoose");
const course = new mongoose.Schema({
    CourseName: {
        type: String
    },
    CourseSubjects: {
        type: Array
    }
})

module.exports = mongoose.model("course", course);