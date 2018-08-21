const user = require("./user.route");
const recipe = require("./recipe.route");
const comment = require("./comment.route");

module.exports = app => {
    app.use("/user", user);
    app.use("/recipe", recipe);
    app.use("/comment", comment);

    app.use("*", (req, res) => {
        res.status(404).json({
            error: "404 Page Not Found!"
        });
    });
};