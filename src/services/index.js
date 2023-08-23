const { User } = require("../db")

const getUsers = async () => {
    return await User.find();
}

const addUser = async (data) => {
    const user = new User(data);
    return await user.save();
}

const updateUser = async (id,data) => {
    const user = await User.findById(id);
    Object.assign(user, data);
    return await user.save();
}

const deleteUser = async (id) => {
    return await User.findByIdAndRemove(id);
}

module.exports = {
    getUsers, addUser, updateUser, deleteUser
}