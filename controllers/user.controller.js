const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 16;

exports.all = async (req, res) => {
    let users = await User.find({});
    res.send(users);
};

exports.create = async (req, res) => {
    let { email, password, firstName, lastName, displayName } = req.body;

    let user = new User({
        email: email,
        isAdmin: false,
        hashedPassword: await bcrypt.hash(password, saltRounds),
        profile: {
            firstName: firstName,
            lastName: lastName,
            displayName: displayName
        }
    });

    await user.save();
    res.send('User has been created successfully!');
};

exports.detail = async (req, res) => {
    let id = (req.params && req.params.id) ? req.params.id : req;
    let user = await User.findOne({ _id: id });
    console.log(user);
    return user;
};

exports.update = async (req, res) => {
    await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.send('User has been updated successfully!');
};

exports.delete = async (req, res) => {
    await User.deleteOne({ _id: req.params.id });
    res.send('User has been deleted successfully!');
};