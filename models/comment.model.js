const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');
const Recipe = require('./recipe.model');

const CommentSchema = new Schema({
    postedBy: { type: Schema.Types.ObjectId, ref: User.model },
    recipeId: { type: Schema.Types.ObjectId, ref: Recipe.model },
    comment: String
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);