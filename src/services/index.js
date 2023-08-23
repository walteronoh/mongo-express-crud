const { User } = require("../db")

const getUsers = async () => {
    return await User.find();
}

const addUser = async (data) => {
    const user = new User(data);
    return await user.save();
}

const updateUser = (data) => {

}

const deleteUser = (id) => {

}

module.exports = {
    getUsers, addUser, updateUser, deleteUser
}