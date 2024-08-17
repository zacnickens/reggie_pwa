const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid token' });
  }
};