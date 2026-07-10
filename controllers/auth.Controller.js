const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../model");

const User = db.User;


exports.register = async (req, res) => {
  try {
    const { nom, email, password, role } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      nom,
      email,
      password: hashedPassword,
      role: role || "consultation", 
    });

   
    res.status(201).json({ message: "Account created successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Error during registration", error: err.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid password." });
    }

  
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, nom: user.nom, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: "Error during login", error: err.message });
  }
};