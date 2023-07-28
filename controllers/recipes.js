const Recipe = require('../models/recipe');

module.exports = {
  index,
  show,
  new: newRecipe,
  create, 

};

async function index(req, res) {
  const recipes = await Recipe.find({});
  res.render('recipes/index', { title: 'All Recipes', recipes });
}

async function show(req, res) {
  const recipe = await Recipe.findById(req.params.id)
  res.render('recipes/show', { title: 'Recipe Detail', recipe });
}

function newRecipe(req, res) {
  res.render('recipes/new', { title: 'Add Recipe', errorMsg: '' });
}

async function create(req, res) {
  try {
    // Update this line because now we need the _id of the new movie
    const recipe = await Recipe.create(req.body);
    // Redirect to the new movie's show functionality 
    res.redirect(`/recipes/${recipe._id}`);
  } catch (err) {
    console.log(err);
    res.render('recipes/new', { errorMsg: err.message });
  }
}