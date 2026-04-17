const express = require('express');
const usersController = require('../../controllers/usersController');
const validateForm = require('../../middlewares/validateForms');
const registerUserSchema = require('../../schemas/registerUserSchema');
const router = express.Router();

router.post("/register", validateForm(registerUserSchema), usersController.register);

module.exports = router;