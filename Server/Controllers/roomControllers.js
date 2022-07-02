const mongoose = require('mongoose');
const RoomSchema = require('../Schema/RoomSchema.js');
const Room =new mongoose.model("Room", RoomSchema);
const { Hotel } = require('../Controllers/hotelControll.js')

const createRoom = async (req, res, next) =>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body) ;
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findOneAndUpdate(hotelId, {
                $push: {
                    rooms: savedRoom._id
                }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

const putRoom = async (req, res, next) =>{
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,
            {$set: req.body}, 
            {new: true});
        res.status(200).json(updateRoom)
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
    
}
const deleteRoom = async (req, res, next) =>{
    const hotelId = req.params.hotelId;
    try {
        await Room.findOneAndDelete(req.params.id);
        try {
            await Hotel.findOneAndUpdate(hotelId, {
                $pull: {
                    rooms: req.params.id
                }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room has been deleted")
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}
const getRoom = async (req, res, next) =>{
    try {
        const room = await Room.findById(req.params.id);
          res.status(200).json(room)
      } catch (error) {
          next(error)
      }
    
}
const getAllRoom = async (req, res, next) =>{
    try {
        const rooms = await Room.find();
          res.status(200).json(rooms)
      } catch (error) {
          res.status(500).json({
              error: error
          })
      }
}

module.exports = {createRoom, putRoom, deleteRoom, getAllRoom, getRoom}