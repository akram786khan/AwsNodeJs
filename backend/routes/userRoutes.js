const express = require('express');
const router = express.Router();
const { getUsers, setUsers, getfindByid, updateUsers, deleteUsers } = require('../controllers/userController')
router.get('/', getUsers)
router.get('/:id', getfindByid)
router.post('/', setUsers)
router.put('/:id', updateUsers)
router.delete('/:id', deleteUsers)
// router.get('/', getUsers)
// router.post('/', setUsers)
// router.put('/:id', updateUsers)
// router.delete('/:id', deleteUsers)

// router.route('/').get(getUsers).post(setUsers)
// router.route('/:id').delete(deleteUsers).put(updateUsers)
module.exports = router;