const express = require('express');
const { putUser, deleteUser, getUser, getAllUser } = require('../Controllers/userControllers.js');
const {verifyToken, verifyUser, verifyAdmin} = require('../utils/verifyToken.js');
const router = express.Router();

// router.get('/checkauth', verifyToken, (req, res, next) =>{
//     res.send("hello you are authintacated!")
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) =>{
//     res.send("hello you are authintacated!")
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) =>{
//     res.send("hello you are admin!")
// })

router.put('/:id', verifyAdmin, putUser);
router.delete('/:id', verifyAdmin, deleteUser)
router.get('/:id', getUser)
router.get('/', verifyAdmin, getAllUser)

module.exports = router