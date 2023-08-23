const userService = require("../services/index");

const getUsers = (req, res) => {
    userService.getUsers()
        .then((users) => {
            return res.status(200).json(users)
        })
        .catch((err) => {
            return res.status(400).json(err);
        });
}

const addUser = (req, res) => {
    userService.addUser(req.body)
        .then((response) => {
            return res.status(201).json(response);
        })
        .catch((err) => {
            return res.status(400).json(err);
        });
}

const updateUser = (req, res) => {
    userService.updateUser(req.params.id, req.body)
        .then((response) => {
            return res.status(201).json(response);
        })
        .catch((err) => {
            return res.status(400).json(err);
        });
}

const deleteUser = (req, res) => {
    userService.deleteUser(req.params.id)
        .then((response) => {
            return res.status(201).json(response);
        })
        .catch((err) => {
            return res.status(400).json(err);
        });
}

module.exports = {
    getUsers, addUser, updateUser, deleteUser
}