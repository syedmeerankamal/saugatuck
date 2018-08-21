const express = require('express');
const router = express.Router();
const Recipe = require('../controllers/recipe.controller');
const User = require('../controllers/user.controller');

router.all('/', async (req, res) => {
    let recipes = await Recipe.all();
    res.render('home', { recipes: recipes });
});

router.all('/recipe-details/:id', async (req, res) => {
    let recipe = await Recipe.detail(req.params.id);
    recipe.totalTimeinMins = recipe.prepTimeinMins + recipe.cookTimeinMins;
    res.render('recipe-details', { recipe: recipe });
});

module.exports = router;