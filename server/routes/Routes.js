const express = require('express');
const router = express.Router();
const {AddItem, getItemsByCategory} = require("../Controller/StoreActions");
const {Login, addToCart, removeFromCart, getCartItems} = require("../Controller/Auth");
const authenticateUser = require("../middleware/auth");

// Middleware
router.use(express.json());

/* ------------------------ Store Item Routes ------------------------ */

router.post('/add', AddItem);
router.get('/:category', getItemsByCategory);


/* ------------------------ Authentication Routes ------------------------ */

router.post('/login', Login);
router.get("/is-authenticated", authenticateUser, (req, res) => {
    if (!req.user) {
        return res.status(401).json({ authenticated: false, error: "User not authenticated" });
    }
    return res.status(200).json({
        authenticated: true,
        user: req.user,
    });
});

/* ------------------------ Cart Routes ------------------------ */

router.post('/add-to-cart', addToCart);

router.get('/get-cart/:username', getCartItems);

router.post('/remove-from-cart', removeFromCart);



module.exports = router;
