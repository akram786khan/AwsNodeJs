const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userAuthController')
//const { protect } = require('../middleware/authMiddleware');
router.post('/signup', registerUser);
router.post('/login', loginUser);
//router.get('/me', protect, getMe);
// router.post('/signup', (req, res) => {
//     res.send("this is signUp route")
// });
// router.post('/login', (req, res) => {
//     res.send("this is login route")
// });
// router.get('/me', (req, res) => {
//     res.send("this is get me route")
// });

module.exports = router;