const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

const SignupUser = async (req, res) => {
  try {
    const { fullName, email, phone, role, password, confirmPassword } = req.body;

    if (!fullName || !email || !phone || !role || !password || !confirmPassword) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    if (!["Student", "Faculty", "Administration"].includes(role)) {
      return res.status(400).json({ message: "Invalid account type." });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must contain at least 8 characters." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ message: "This email is already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const savedUser = await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      role,
      password: hashedPassword
    });

    return res.status(201).json({
      message: "User created successfully!",
      user: {
        id: savedUser._id,
        fullName: savedUser.fullName,
        email: savedUser.email,
        phone: savedUser.phone,
        role: savedUser.role
      }
    });
  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    // Duplicate email (race condition)
    if (error.code === 11000) {
      return res.status(409).json({ message: "This email is already registered!" });
    }

    return res.status(500).json({
      message: "Error creating user.",
      error: error.message
    });
  }
};

module.exports = { SignupUser };