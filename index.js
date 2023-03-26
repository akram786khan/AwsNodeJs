
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
//const { errorHandler } = require('./backend/middleware/errorMiddleware')
const ConnectDB = require('./backend/config/db');
const app = express();
ConnectDB();
app.use(cors());
app.use(express.json());
app.get("/myyy", (req, res) => {
    res.send("Hello akram khan.._oooooooo__")

})
app.use('/DreamCoder/api/userAuth', require('./backend/routes/userAuthRoutes'))

app.listen(port, () => {
    console.log(`app server started on port ${port}`)
})


// const express = require('express');
// const multer = require('multer')
// const path = require('path')
// const cors = require('cors')
// const dotenv = require('dotenv').config();
// const port = process.env.PORT || 5000;
// const { errorHandler } = require('./backend/middleware/errorMiddleware')
// const ConnectDB = require('./backend/config/db');
// const { execPath } = require('process');
// const app = express();

// const storage = multer.diskStorage({
//     destination: "./upload/images",
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
// const upload = multer({
//     storage: storage
// })
// ConnectDB();
// //akram
// // app.get("/", (req, res) => {
// //     res.status(200).json({ message: "get data" });
// // })
// app.get("/myy", (req, res) => {
//     res.send("Hello ...")
// })

// app.use(cors());
// app.use(errorHandler);
// //app.use('/profile', express.static('upload/images'))
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }))
// //app.use("/DreamCoder/api", require("./backend/routes/dashbordRoutes"))
// //app.use("/DreamCoder/api", require("./backend/routes/countryRoutes"))
// //app.use("/DreamCoder/api", require("./backend/routes/courseRoutes"))
// //app.use("/DreamCoder/api/student", require("./backend/routes/studentRoutes"))
// //app.use("/DreamCoder/api/employe", require("./backend/routes/employeRoutes"))
// //app.use('/DreamCoder/api/users', require('./backend/routes/userRoutes'))
// app.use('/DreamCoder/api/userAuth', require('./backend/routes/userAuthRoutes'))
// //app.use('/DreamCoder/api', require('./backend/routes/productRoutes'))
// //app.use('/DreamCoder/api', require('./backend/routes/addtocartRoutes'))
// //app.use('/DreamCoder/api', require('./backend/routes/wishListRoutes'))
// //app.post('/DreamCoder/upload', upload.single('profile'), (req, res) => {
// //   console.log(req.file);
// // res.json({
// //    success: 1,
// //  profile_url: `http://localhost:${port}/profile/${req.file.filename}`
// //})
// //})
// app.listen(port, () => {
//     console.log(`app server started on port ${port}`)
// })