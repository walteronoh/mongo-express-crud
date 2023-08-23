const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGO_CONNECTION_STRING)

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then((value) => {
    console.log("Mongo connection successful");
}).catch((error) => {
    console.log("There was an error while connecting to Mongo: " + error);
});

module.exports = {
    User: require("../models/index")
}