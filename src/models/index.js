const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    age: {
        type: Number,
        required: [true, "Age is required!"],
        validate: {
            validator: (value) => {
                if(value > 0) return value;
            },
            message: () => "Please enter a valid age",
        }
    },
    location: {
        type: String,
        required: [true, "Location is required!"]
    }
});

module.exports = mongoose.model("User", userSchema);