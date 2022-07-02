const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const app = express();
dotenv.config();

const authRouter = require('./router/auth.js');
const userRouter = require('./router/user.js');
const hotelRouter = require('./router/hotels.js');
const roomRouter = require('./router/rooms.js');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Mongodb");
    } catch (error) {
        throw error

    }
}
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/hotel', hotelRouter);
app.use('/rooms', roomRouter);

app.use((err, req, res, next) =>{
    const errorStatus = err.status || 500;
    const errorMassage = err.message || "Somthing went worng";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMassage,
        stack: err.stack
    })
})


app.listen(5000, () => {
    connect();
    console.log("backend connected!");
})