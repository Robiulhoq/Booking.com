const express = require('express');
const { createHotel, putHotel, deleteHotel, getHotel, getAllHotel } = require('../Controllers/hotelControll.js');
const { verifyAdmin } = require('../utils/verifyToken.js');
const router = express.Router();




router.post('/', verifyAdmin, createHotel);
router.put('/:id', verifyAdmin, putHotel);
router.delete('/:id', verifyAdmin, deleteHotel);
router.get('/:id', getHotel);
router.get('/', getAllHotel);

module.exports = router