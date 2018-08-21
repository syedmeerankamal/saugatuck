const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.get('/', commentController.all);
router.post('/create', commentController.create);
router.get('/detail/:id', commentController.detail);
router.put('/update/:id', commentController.update);
router.delete('/delete/:id', commentController.delete);
router.get('/getCommentsByUser/:postedBy', commentController.getCommentsByUser);
router.get('/getCommentsByRecipe/:recipeId', commentController.getCommentsByRecipe);


module.exports = router;