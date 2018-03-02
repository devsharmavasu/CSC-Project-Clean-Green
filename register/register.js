'use strict';

const express = require('express');
const registerRouter = express.Router();
const bodyParser = require('body-parser');
const validator = require('express-validator');
const {check, validationResult} = require('express-validator/check');

registerRouter.use(bodyParser.urlencoded({ extended: false }));
registerRouter.use(validator());

registerRouter.route('/').get((req, res) => {
    res.render('../views/register');
});

registerRouter.route('/').post((req, res) => {
    console.log(req.body);
    res.send('Success');
});



module.exports = registerRouter;
