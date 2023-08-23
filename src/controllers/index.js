const userService = require("../services/index");

const getUsers = (req,res) => {
    userService.getUsers()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

module.exports = {
    getUsers
}