const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  console.log("User Info from Middleware:", req.user); // Debugging
  if (!req.user) {
      return res.status(403).json({ message: "User not authenticated" });
  }

  const { username, userId, role } = req.user;
  res.json({
      message: 'Welcome to Home Page',
      user: { _id: userId, username, role }
  });
});

module.exports = router;