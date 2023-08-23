const express = require('express');
const { getUsers } = require('../controllers');
const router = express.Router();

const rootUrl = "/api";
const versionUrl = "/v1/";
const url = rootUrl + versionUrl;

router.get(url, getUsers);

router.post(url, (req, res) => {
    res.send('Crud POST home page')
});

router.put(url, (req, res) => {
    res.send('Crud PUT home page')
});

router.delete(url, (req, res) => {
    res.send('Crud DELETE home page')
});

module.exports = router;