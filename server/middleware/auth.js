const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    let token = req.cookies.token; // 🔹 First, check cookies

    // 🔹 If no cookie, check Authorization header
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, "kandpidikula");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token." });
    }
};

module.exports = authenticateUser;
