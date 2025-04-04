const UserData = require('../models/UserData');
const {generateTokenAndSetCookie} = require("../Utils/generateTokenAndSetCookie");

const Login = async (req, res) => {
    const {username} = req.body;
    if (!username) {
        return res.status(400).json({error: 'Username required'});
    }
    try {
        const user = await UserData.findOne({username});
        if (user) {
            generateTokenAndSetCookie(res, user._id);
            res.status(200).json({
                success: true,
                data: user,
            });
        }
        else {
            const newUser = new UserData({username});
            await newUser.save();
            generateTokenAndSetCookie(res, newUser._id);
            res.status(201).json({
                success: true,
                data: newUser,
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to login'});
    }
}

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
module.exports = {Login , addToCart};