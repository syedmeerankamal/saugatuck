const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

router.get('/', recipeController.all);
router.post('/create', recipeController.create);
router.get('/detail/:id', recipeController.detail);
router.put('/update/:id', recipeController.update);
router.delete('/delete/:id', recipeController.delete);
router.get('/getRecipesByUser/:postedBy', recipeController.getRecipesByUser);
router.get('/getRecipesByCategory/:category', recipeController.getRecipesByCategory);

module.exports = router;