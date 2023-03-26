const stucountry = require("../../modals/studentModal/CountryModel");
const asyncHandler = require('express-async-handler')





const getCountry = asyncHandler(async (req, res) => {
    try {
        const data = await stucountry.find();
        if (!data) {
            res.status(400).json({ status: false, message: "data not found" })
        }
        res.status(200).json({ status: true, message: data });

    } catch (err) {
        res.status(400).json({ status: false, message: err });
    }

})

const getCountryfindByid = asyncHandler(async (req, res) => {
    const data = await stucountry.find({ _id: req.params._id });

    res.status(200).json({ status: true, SchoolNames: data[0].CountrySchool });

})

const addCountry = asyncHandler(async (req, res) => {
    // const {course,country,subname} = req.body
    const { CountryCode, CountryName, CountrySchool } = req.body


    if (!CountryCode || !CountryName || !CountrySchool) {
        res.status(400).json({ error: "please add all filds" })
    }

    const data = await stucountry.create({

        CountryCode,
        CountryName,
        CountrySchool,
    })
    if (data) {
        res.status(201).json({
            status: true,
            _id: data._id,
            CountryCode,
            CountryName,
            CountrySchool,
        })
    } else {
        res.status(400).json({ error: "Invalid Country Data" })
    }


})

module.exports = {
    getCountry,
    getCountryfindByid,
    addCountry,
}