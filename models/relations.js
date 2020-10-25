const mongoose = require('mongoose');

const { Objectid } = mongoose.Schema;

const relationsSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: 'Users',
      required: true
    }
  },
  {
    userRelationId: {
      type: ObjectId,
      ref: 'Users',
      required: true
    }
  }
);


//Exportamos Schema relations
module.exports = mongoose.model('Relations', relationsSchema);