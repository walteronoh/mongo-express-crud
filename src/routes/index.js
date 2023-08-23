const express = require('express');
const { getUsers, addUser, updateUser, deleteUser } = require('../controllers');
const router = express.Router();

const rootUrl = "/api";
const versionUrl = "/v1/";
const url = rootUrl + versionUrl;

router.get(url, getUsers);

router.post(url, addUser);

router.put(`${url}:id`, updateUser);

router.delete(`${url}:id`, deleteUser);

module.exports = router;