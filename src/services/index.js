const { User } = require("../db")

const getUsers = async () => {
    return await User.find();
}

const addUser = (data) => {

}

const updateUser = (data) => {

}

const deleteUser = (id) => {

}

module.exports = {
    getUsers, addUser, updateUser, deleteUser
}