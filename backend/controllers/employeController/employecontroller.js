const employe = require("../../modals/employeModal/employeModal")
// const subjects = require("../../model/studentmodel/studentsubmodel")
// const countr = require("../../model/studentmodel/studentcountrymodel")
// const cours = require("../../model/studentmodel/studentcoursemodel")
const asyncHandler = require('express-async-handler')

const getemploye = asyncHandler(async (req, res) => {
    const data = await employe.find();
    res.status(200).json({ status: true, message: data });

})
const updateemploye = asyncHandler(async (req, res) => {
    const fintId = await employe.findById(req.params._id);
    if (!fintId) {
        res.status(400).json({ message: 'Employes Not Found' });

    }
    const UpdateEmploye = await employe.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("===> UpdateStudent", UpdateEmploye);
    res.status(200).json({ message: `Update Employes data ${req.params._id}` });

})
const deleteemploye = asyncHandler(async (req, res) => {
    const fintId = await employe.findById(req.params._id);
    if (!fintId) {
        res.status(400).json({ message: "Employes Not Found" })

    }
    await fintId.remove();
    res.status(200).json({ message: `delete Employes data ${req.params._id}` });

})
const getemployefindByid = asyncHandler(async (req, res) => {
    const data = await employe.find({ _id: req.params._id });

    res.status(200).json({ status: true, message: data });

})

const addemploye = asyncHandler(async (req, res) => {
    // const {course,country,subname} = req.body
    const { Employid, Employname, Employemail, Employnumber, Employaddress, Employdob, Employment } = req.body
    //   const countrys = await countr.findOne({})
    // const courses = await cours.findOne({})
    // const subjecting = await subjects.findOne({})
    // JSON.stringify(countrys)
    // JSON.stringify(courses)
    // JSON.stringify(subjecting)
    // console.log(countrys.CountryCode);
    // console.log(courses.course.basiccourse);
    // console.log(countrys.CountrySchool.School[0])
    // console.log(subjecting);

    if (!Employid || !Employname || !Employemail || !Employnumber || !Employaddress || !Employdob || !Employment) {
        res.status(400).json({ error: "please add all filds" })
    }

    const data = await employe.create({
        Employid,
        Employname,
        Employemail,
        Employnumber,
        Employaddress,
        Employdob,
        Employment,
    })
    if (data) {
        res.status(201).json({
            status: true,
            Employid,
            Employname,
            Employemail,
            Employnumber,
            Employaddress,
            Employdob,
            Employment,
        })
    } else {
        res.status(400).json({ error: "Invalid Employes Data" })
    }


})


module.exports = { addemploye, getemploye, getemployefindByid, updateemploye, deleteemploye }