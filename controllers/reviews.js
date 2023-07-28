const Recipe = require('../models/recipe')

module.exports = {
    create,
    delete: deleteReview
}

async function deleteReview(req, res) {
    const recipe = await Recipe.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    if (!recipe) return res.redirect('/recipes');
    recipe.reviews.remove(req.params.id);
    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`);
  }
  
  async function create(req, res) {
    const recipe = await Recipe.findById(req.params.id);
  
    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    // We can push (or unshift) subdocs into Mongoose arrays
    recipe.reviews.push(req.body);
    try {
      await recipe.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/recipes/${recipe._id}`);
  }