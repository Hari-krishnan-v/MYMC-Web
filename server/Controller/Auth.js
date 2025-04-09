const UserData = require('../models/UserData');
const {generateTokenAndSetCookie} = require("../Utils/generateTokenAndSetCookie");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const Login = async (req, res) => {
    const { username } = req.body;
    console.log(username)
    if (!username) {
        return res.status(400).json({ error: 'Username required' });
    }
    try {
        const user = await UserData.findOne({ username });

        if (user) {
            const token = jwt.sign({ id: user._id, username: user.username }, 'kandpidikula', { expiresIn: '1h' });

            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'Lax',
            });

            return res.status(user.isNew ? 201 : 200).json({
                success: true,
                data: user,
                token
            });
        }
       else{
           await UserData.create({ username });
            const token = jwt.sign({ id: user._id, username: user.username }, 'kandpidikula', { expiresIn: '1h' });

            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'Lax',
            });
            return res.status(user.isNew ? 201 : 200).json({
                success: true,
                data: user,
                token
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to login' });
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
module.exports = {Login , addToCart , getCartItems, removeFromCart};