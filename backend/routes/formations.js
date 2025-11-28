const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/Formation"); // يشير إلى models/Formation.js

// ---------------------------------------------
// POST: تسجيل مستخدم جديد /signup
// ---------------------------------------------
router.post("/signup", async (req, res) => {
  try {
    const { username, password, nom, prenom, titreFormation, contenuFormation } = req.body;

    // التحقق إذا كان username موجود مسبقًا
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // إنشاء مستخدم جديد
    const newUser = new User({
      username,
      password: hashedPassword,
      nom,
      prenom,
      titreFormation,
      contenuFormation
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "User created successfully", userId: savedUser._id });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ---------------------------------------------
// POST: تسجيل الدخول /login
// ---------------------------------------------
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // البحث عن المستخدم
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // التحقق من كلمة المرور
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    res.status(200).json({
      message: "Login successful",
      userId: user._id
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ---------------------------------------------
// GET: استرجاع جميع المستخدمين /formateurs
// ---------------------------------------------
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ---------------------------------------------
// GET: استرجاع مستخدم واحد /:id
// ---------------------------------------------
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ---------------------------------------------
// PUT: تحديث مستخدم /:id
// ---------------------------------------------
router.put("/:id", async (req, res) => {
  try {
    const { username, password, nom, prenom, titreFormation, contenuFormation } = req.body;

    const updateData = { username, nom, prenom, titreFormation, contenuFormation };

    if (password) {
      // إذا تم إرسال كلمة مرور جديدة، شفرها
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ---------------------------------------------
// DELETE: حذف مستخدم /:id
// ---------------------------------------------
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
