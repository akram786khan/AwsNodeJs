
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
//const { errorHandler } = require('./backend/middleware/errorMiddleware')
//const ConnectDB = require('./backend/config/db');
const app = express();
//ConnectDB();
app.use(cors());
app.use(express.json());
app.get("/myy", (req, res) => {
    res.send("Hello....")

})
app.get('/Allproducts', async (req, res) => {
    res.status(200).json({
        status: true, data: [
            { 'id': 1, 'price': '$19.5', 'title': 'Fashion-Shoes', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "White", "size": "XL", "qun": "1" },
            { 'id': 2, 'price': '$29.5', 'title': 'Fashion-Cort', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "black", "size": "XXL", "qun": "1" },
            { 'id': 3, 'price': '$20', 'title': 'Casual-Shoes', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "blue", "size": "L", "qun": "1" },
            { 'id': 4, 'price': '$5', 'title': 'Winter-Clothe', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "red", "size": "XXL", "qun": "1" },
            { 'id': 5, 'price': '$23', 'title': 'Printed-T-Sirt', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "blue", "size": "S", "qun": "1" },
            { 'id': 6, 'price': '$9.67', 'title': 'Winter', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "White", "size": "XL", "qun": "1" },
            { 'id': 7, 'price': '$24.5', 'title': 'Bag', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "black", "size": "XL", "qun": "1" },
            { 'id': 8, 'price': '$18.2', 'title': 'T-Sirt', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-8.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "yellow", "size": "L", "qun": "1" }
        ]
    })
});
//app.use('/DreamCoder/api/userAuth', require('./backend/routes/userAuthRoutes'))

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