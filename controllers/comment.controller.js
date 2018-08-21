const Comment = require('../models/comment.model');
const mongoose = require('mongoose');
const dateFormat = require('dateformat');

exports.all = async (req, res) => {
    let comments = await Comment.find({});
    res.send(comments);
};

exports.create = async (req, res) => {
    let { postedBy, recipeId, comments } = req.body;
    
    let comment = new Comment({
        postedBy: mongoose.Types.ObjectId(postedBy),
        recipeId: mongoose.Types.ObjectId(recipeId),
        comment: comments
    });

    await comment.save();
    res.send('Comment has been created successfully!');
};

exports.detail = async (req, res) => {
    let comment = await Comment.findOne({ _id: req.params.id });
    res.send(comment);
};

exports.update = async (req, res) => {
    await Comment.updateOne({ _id: req.params.id }, { $set: req.body });
    res.send('Comment has been updated successfully! ', req.params.id);
};

exports.delete = async (req, res) => {
    await Comment.deleteOne({ _id: req.params.id });
    res.send('Comment has been deleted successfully! ', req.params.id);
};

exports.getCommentsByUser = async (req, res) => {
    const comments = await Comment.find({ postedBy: req.params.postedBy });
    return comments;
};

exports.getCommentsByRecipe = async (req, res) => {
    let id = (req.params && req.params.id) ? req.params.id : req;
    const comments = await Comment.find({ recipeId: id });
    return comments;
};