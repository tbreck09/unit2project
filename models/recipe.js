const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  const recipeSchema = new Schema({
    title: { type: String, required: true },
    ingredients: { type: String, required: true },

    reviews: [reviewSchema],
    
    timestamps: true
  });
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model('Recipe', recipeSchema);