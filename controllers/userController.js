const { user } = require("../models/user");
const index = (req, res, next) => {
  return res.status(200).json({ fullname: "Phupha" });
};
const bio = (req, res, next) => {
  return res.status(200).json({
    fullname: "Phupha Noppakun",
    nickname: "PooH",
    hobby: "Sleep",
    gitusername: "c0zyb0y",
  });
};
const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    let userinsert = new user();
    userinsert.name = name;
    userinsert.email = email;
    userinsert.password = password;
    userinsert.password = await userinsert.encryptPassword(password);
    await userinsert.save();
    return res.status(200).json({ message: "Register successful!" });
  } catch (e) {
    return res.status(404).json({ message: "Register Error" });
    return res.status(404).json({ message: `Register Error: ${e.message}` });
  }
};