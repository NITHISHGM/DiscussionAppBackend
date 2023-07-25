const User = require("../modal/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(500).json({
        error: "Please fill all the fields",
      });
    } else {
      let checkUserExist = await User.findOne({ email });
      if (
        checkUserExist &&
        (await bcrypt.compare(password, checkUserExist.password))
      ) {
        res.status(200).json({
          id: checkUserExist._id,
          email: checkUserExist.email,
          name: checkUserExist.name,
          token: genToken(checkUserExist._id),
        });
      } else {
        return res.status(401).json({ error: "Invalid username or password" });
      }
    }
  } catch (error) {
    res.status(500).json({
      error: "user not authorized",
    });
  }
};

const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { loginUser };
