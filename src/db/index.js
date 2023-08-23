const mongoose = require('mongoose');
require('dotenv').config();

try {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING).then((value) => {
        console.log("Mongo connection successful");
    }).catch((error) => {
        console.log("There was an error while connecting to Mongo: " + error);
        throw error;
    });
} catch (error) {
    console.log("There was an error while connecting to Mongo: " + error);
    throw error;
}

module.exports = {
    User: require("../models/index")
}