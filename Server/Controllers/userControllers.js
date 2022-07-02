const { User } = require('./authControllers.js');



const putUser = async (req, res, next) =>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,
            {$set: req.body}, 
            {new: true});
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
    
}
const deleteUser = async (req, res, next) =>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}
const getUser = async (req, res, next) =>{
    try {
        const user = await User.findById(req.params.id);
          res.status(200).json(user)
      } catch (error) {
          next(error)
      }
    
}
const getAllUser = async(req, res, next) =>{
    try {
        const users = await User.find();
          res.status(200).json(users)
      } catch (error) {
          res.status(500).json({
              error: error
          })
      }
}



module.exports = { putUser, deleteUser, getUser, getAllUser}