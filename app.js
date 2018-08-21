const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const configRoutes = require("./routes");
let port = 3000;

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/saugatuck', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
configRoutes(app);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});