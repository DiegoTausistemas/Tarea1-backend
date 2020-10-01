const mongoose = require('mongoose');

// Asociación
const { Objectid } = mongoose.Schema;

const tweetsSchema = new mongoose.Schema(
  {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      message: {
        type: String
      }
  },
      {
        timestamps: true
      }
);

//Exportamos Schema User
module.exports = mongoose.model('Tweets', tweetsSchema);