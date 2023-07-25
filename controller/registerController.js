const User = require("../modal/user");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(500).json({
        error: "Please fill all the fields",
      });
    } else {
      let userExist = await User.findOne({
        email,
      });
      if (userExist) {
        res.status(400).json({
          error: "Exisiting user...",
        });
      }

      // Hash the password
      let hashedPassword = await bcrypt.hash(password, 10);
      let createNewUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      res.status(201).json(createNewUser);
    }
  } catch (error) {
    res.status(500).json({
      error: "user not authorized",
    });
  }
};

module.exports = { registerUser };
