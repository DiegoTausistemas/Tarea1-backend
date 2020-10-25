const mongoose = require("mongoose");

// Schema MongoDB
const userSchema = new mongoose.Schema(
  {
      name: {
          type: String,
          trim: true,
          require: true,
      },
      surname: {
        type: String,
        trim: true,
        require: true,
      },
      birthdate: {
        type: Date,
        default: Date.now()
      },
      email: {
        type: String,
        trim: true,
        unique: true,
      },
      password: {
        type: String,
        trim: true,
        require: true,
      },
      avatar: {
        type: String,
        trim: true,
        default: ''
      },
      banner: {
        type: String,
        trim: true,
        default: ''
      },
      biography: {
        type: String,
        trim: true,
        default: ''
      },
      location: {
        type: String,
        trim: true,
        default: ''
      },
      website: {
        type: String,
        trim: true,
        default: ''
      }
  },
      {
        timestamps: true
      }
);


//Exportamos Schema User
module.exports = mongoose.model('Users', userSchema);