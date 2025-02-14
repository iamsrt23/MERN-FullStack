const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");
dotEnv.config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied. No Token Provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        // Verify token
        const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedTokenInfo; // Attach decoded info to request object
        next(); // Proceed to next middleware
    } catch (error) {
        return res.status(403).json({ message: "Invalid or Expired Token" });
    }
};

module.exports = authMiddleware;