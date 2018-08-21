const Recipe = require('../models/recipe.model');
const mongoose = require('mongoose');
const User = require('./user.controller');

exports.all = async (req, res) => {
    let recipes = await Recipe.find();
    console.log(recipes);
    return recipes;
};

exports.create = async (req, res) => {
    let { postedBy, name, description, prepTimeinMins, cookTimeinMins, serves, category, imageUrl, videoUrl, ingredients } = req.body;

    let recipe = new Recipe({
        postedBy: mongoose.Types.ObjectId(postedBy),
        name: name,
        ingredients: ingredients,
        description: description,
        prepTimeinMins: prepTimeinMins,
        cookTimeinMins: cookTimeinMins,
        serves: serves,
        category: category,
        imageUrl: imageUrl,
        videoUrl: videoUrl,
        ratings: { count: 0, value: 0 }
    });

    await recipe.save();
    res.send('Recipe created successfully!');
};

exports.detail = async (req, res) => {
    let id = (req.params && req.params.id) ? req.params.id : req;
    let recipe = await Recipe.findOne({ _id: id });
    return recipe;
};

exports.update = async (req, res) => {
    let recipe = await Recipe.updateOne({ _id: req.params.id }, { $set: req.body });
    console.log('Recipe has been updated successfully!');
    return recipe;
    
};

exports.delete = async (req, res) => {
    await Recipe.deleteOne({ _id: req.params.id });
    res.send('Recipe has been deleted successfully!');
};

exports.getRecipesByUser = async (req, res) => {
    const recipes = await Recipe.find({ postedBy: req.params.postedBy });
    return recipes;
};

exports.getRecipesByCategory = async (req, res) => {
    const recipes = await Recipe.find({ category: req.params.category });
    return recipes;
}