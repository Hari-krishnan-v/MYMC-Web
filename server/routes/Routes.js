const express = require('express');
const router = express.Router();
const {AddItem, getItemsByCategory,updateItem ,deleteItem} = require("../Controller/StoreActions");
const {Login, addToCart, removeFromCart, getCartItems, checkAuth, adminCheckAuth, adminLogin} = require("../Controller/Auth");

// Middleware
router.use(express.json());

/* ------------------------ Store Item Routes ------------------------ */

router.get('/admin-check-auth',adminCheckAuth);
router.get("/check-auth",checkAuth);


router.post('/add', AddItem);
router.get('/:category', getItemsByCategory);
router.put('/update/:id', updateItem);
router.delete('/delete/:id', deleteItem);


/* ------------------------ Authentication Routes ------------------------ */

router.post('/login', Login);
router.post('/admin-login', adminLogin);
/* ------------------------ Cart Routes ------------------------ */

router.post('/add-to-cart', addToCart);

router.get('/get-cart/:username', getCartItems);

router.post('/remove-from-cart', removeFromCart);



module.exports = router;
