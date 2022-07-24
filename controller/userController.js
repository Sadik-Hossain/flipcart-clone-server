const User = require("../model/user-schema");

const userSignup = async (req, res) => {
  try {
    // console.log(`==========================\n`, req.body);
    //* checking for username duplication, although in server we will get error before sending to db, but client doesn't know that duplication error. for this reason we will check
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "username already exists" });
    }
    const user = req.body;

    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    console.log(error.message, "data error");
    res.status(500).json({ message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json({
        data: user,
      });
    } else {
      return res.status(401).json("invalid login");
    }
  } catch (error) {
    res.status(500).json("error", error.message);
  }
};

module.exports = { userSignup, userLogin };
