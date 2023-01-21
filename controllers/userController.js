const { user } = require("../models/user");
const {validationResult} = require('express-validator')
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

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("ข้อมูลที่ได้รับมาไม่ถูกต้อง");
      error.statusCode = 422;
      error.validation = errors.array()
      throw error;
    }
    
  try {
    const isEmailExist = await user.findOne({ email: email });
    if (isEmailExist) {
      const error = new Error("Register Error: Email already exists");
      error.statusCode = 405;
      throw error;
    }
    try {
      let userinsert = new user();
      userinsert.name = name;
      userinsert.email = email;
      userinsert.password = await userinsert.encryptPassword(password);
      await userinsert.save();
      return res.status(200).json({ message: "Register successful!" });
    } catch (e) {
      const error = new Error(`Register Error: ${e.message}`);
      error.statusCode = 405;
      throw error;
    }
  } catch (e) {
    return res.status(404).json({ message: "Register Error" });
    next(e);
  }
};