const UserData = require('../models/UserData');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const axios = require('axios');



const Login = async (req, res) => {
    const { username } = req.body;
    console.log("Username from request:", username);

    // Ensure username is provided
    if (!username) {
        return res.status(400).json({ error: 'Username required' });
    }

    try {

        const mcRes = await axios.get(`https://playerdb.co/api/player/minecraft/${username}`);


        const mcData = mcRes?.data?.data?.player;
        if (!mcData) {
            return res.status(404).json({ error: 'Minecraft player not found' });
        }


        const fullSkinUrl = `https://crafthead.net/armor/body/${mcData.id}`;  // CraftHead full body image URL


        let user = await UserData.findOne({ username });


        if (!user) {
            user = await UserData.create({
                username,
                minecraftUUID: mcData.id,
                avatar: fullSkinUrl  // Store full body skin image URL
            });
        }

        // Generate a JWT token for the user
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET || 'kandpidikula',
            { expiresIn: '1h' }
        );

        // Set token in cookies (consider 'secure' to be true in production)
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,  // Set to true in production with HTTPS
            sameSite: 'Lax',
        });

        // Respond with user data, including the avatar and Minecraft information
        return res.status(user.isNew ? 201 : 200).json({
            success: true,
            token,
            data: {
                _id: user._id,
                username: user.username,
                cart: user.UserCart,
                minecraft: {
                    uuid: mcData.id,
                    avatar: fullSkinUrl,
                    username: mcData.username
                },
                luckyDraw: user.luckyDraw,
                luckyDrawMonth: user.luckyDrawMonth,
                luckyDrawTicket: user.luckyDrawTicket,
                OrderHistory: user.OrderHistory,
                isLuckyDrawWinner: user.isLuckyDrawWinner,
            }
        });

    } catch (error) {
        // Enhanced error handling for different failure cases
        console.error("Login error:", error?.response?.data || error.message);

        // Handle specific error cases
        if (error?.response?.status === 404) {
            return res.status(404).json({ error: 'Minecraft player not found' });
        }

        // General error case
        return res.status(500).json({ error: 'Failed to login or fetch Minecraft data' });
    }
};

const checkAuth = async (req, res) => {

    let token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {

        return res.status(401).json({ authenticated: false, error: "No token provided" });
    }

    try {
        // Secret for JWT verification, can be modified via environment variable
        const jwtSecret = process.env.JWT_SECRET || "kandpidikula";


        // Verify token
        const decoded = jwt.verify(token, jwtSecret);


        // Retrieve the user from the database using decoded ID
        const user = await UserData.findById(decoded.id);
        if (!user) {

            return res.status(404).json({ authenticated: false, error: "User not found" });
        }

        return res.status(200).json({
            authenticated: true,
            success: true,
            data: {
                _id: user._id,
                username: user.username,
                cart: user.UserCart,
                minecraft: {
                    uuid: user.minecraftUUID,
                    avatar: user.avatar,
                    username: decoded.username
                },
                luckyDraw: user.luckyDraw,
                luckyDrawMonth: user.luckyDrawMonth,
                luckyDrawTicket: user.luckyDrawTicket,
                OrderHistory: user.OrderHistory,
                isLuckyDrawWinner: user.isLuckyDrawWinner,

            },
        });

    } catch (error) {

        // Handle token errors (e.g., expired token, invalid signature)
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ authenticated: false, error: "Token has expired" });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ authenticated: false, error: "Invalid token" });
        } else {
            return res.status(500).json({ authenticated: false, error: "An unexpected error occurred" });
        }
    }
};


const addToCart = async (req, res) => {
    const {username, item} = req.body;
    if (!username || !item) {
        return res.status(400).json({error: 'Username and item required'});
    }
    try {
        const user = await UserData.findOne({username});
        if (user) {
            user.UserCart.push(item);
            await user.save();
            res.status(200).json({
                success: true,
                data: user,
            });
        } else {
            res.status(404).json({error: 'User not found'});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to add to cart'});
    }
}

const getCartItems = async (req, res) => {
    const { username } = req.params; // Extract username from URL params

    if (!username) {
        return res.status(400).json({ error: 'Username required' });
    }
    try {
        const user = await UserData.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({
            success: true,
            cartItems: user.UserCart,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
};

const removeFromCart = async (req, res) => {
    const { username, itemId } = req.body;

    if (!username || !itemId) {
        return res.status(400).json({ error: 'Username and item ID required' });
    }

    try {
        const user = await UserData.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.UserCart = user.UserCart.filter(item => item._id.toString() !== itemId);
        await user.save();

        res.status(200).json({
            success: true,
            data: user,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to remove from cart' });
    }
};

const adminLogin = async (req, res) => {
    const { username, password } = req.body;
console.log("Admin Login Attempt:", username, password);
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }

    try {

        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD ) {
            const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'kandpidikula', { expiresIn: '1h' });
            return res.status(200).json({
                success: true,
                token ,
                username:"admin",
            });
        } else {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to login' });
    }
};

const adminCheckAuth = async (req, res) => {
    let token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ authenticated: false, error: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'kandpidikula');
        console.log("Decoded JWT:", decoded);

        if (decoded.role !== 'admin') {
            return res.status(403).json({ authenticated: false, error: "Not authorized" });
        }

        return res.status(200).json({ authenticated: true, success: true , username: decoded.role });

    } catch (error) {
        return res.status(500).json({ authenticated: false, error: "An unexpected error occurred" });
    }
}

const adminUsersFetch = async (req, res) => {
    try {
        console.log("Fetching all users");
        const users = await UserData.find();
        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};


module.exports = {Login , addToCart , getCartItems, removeFromCart , checkAuth , adminCheckAuth, adminLogin , adminUsersFetch};