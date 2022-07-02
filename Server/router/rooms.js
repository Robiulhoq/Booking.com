const express = require('express');
const { createRoom, putRoom, deleteRoom, getRoom, getAllRoom } = require('../Controllers/roomControllers');
const { verifyAdmin } = require('../utils/verifyToken.js')
const router = express.Router();


router.post('/:hotelId', verifyAdmin, createRoom);
router.put('/:id', verifyAdmin, putRoom);
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);
router.get('/:id', getRoom);
router.get('/', getAllRoom);

module.exports = router