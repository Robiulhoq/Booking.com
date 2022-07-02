const mongoose = require("mongoose");
const HotelSchema = require("../Schema/HotelSchema.js");
const Hotel = new mongoose.model("Hotel", HotelSchema);

const createHotel = async (req, res, next) =>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    } catch (error) {
       next(error)
    }
}

const putHotel = async (req, res, next) =>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,
            {$set: req.body}, 
            {new: true});
        res.status(200).json(updateHotel)
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
    
}
const deleteHotel = async (req, res, next) =>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}
const getHotel = async (req, res, next) =>{
    try {
        const hotel = await Hotel.findById(req.params.id);
          res.status(200).json(hotel)
      } catch (error) {
          next(error)
      }
    
}
const getAllHotel = async (req, res, next) =>{
    try {
        const hotels = await Hotel.find();
          res.status(200).json(hotels)
      } catch (error) {
          res.status(500).json({
              error: error
          })
      }
}



module.exports = {createHotel, putHotel, deleteHotel, getHotel, getAllHotel, Hotel }