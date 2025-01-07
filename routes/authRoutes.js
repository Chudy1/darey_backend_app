const express = require("express");
const { register, login } = require("../controllers/authController");
const validateInput = require("../middleware/validateInput");

const router = express.Router();

router.post("/register", validateInput, register);
router.post("/login", login);

module.exports = router;
