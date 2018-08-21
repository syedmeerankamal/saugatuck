const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');
const Comment = require('./comment.model');

let RecipeSchema = new Schema({
    postedBy: { type: Schema.Types.ObjectId, ref: User.model },
    name: String,
    ingredients: [{
        name: String,
        quantity: String
    }],
    description: [String],
    prepTimeinMins: Number,
    cookTimeinMins: Number,
    serves: Number,
    category: String,
    imageUrl: String,
    videoUrl: String,
    ratings: {
        count: Number,
        value: Number
    },
    comments: [
        { type: Schema.Types.ObjectId, ref: Comment.model }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);