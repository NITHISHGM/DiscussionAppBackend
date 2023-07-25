const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/registerController");
const { loginUser } = require("../controller/loginController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
