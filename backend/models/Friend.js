const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },  
      user2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      approved:{
        type: Boolean,
     }
})

module.exports = mongoose.model('Friend', FriendSchema)
