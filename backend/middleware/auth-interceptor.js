const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config()
const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next(); 
  } catch (err) {
    console.error(err);
    res.status(403).json({ message: "Invalid or expired token" });
    
  }
};

module.exports = {authMiddleware};
