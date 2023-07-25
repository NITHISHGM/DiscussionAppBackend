const Register = require("../modal/register");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(500).json({
        error: "Please fill all the fields",
      });
    } else {
      let userExist = await Register.findOne({
        email,
      });
      if (userExist) {
        res.status(400).json({
          error: "Exisiting user...",
        });
      }
      let createNewUser = await Register.create({
        name,
        email,
        password,
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
