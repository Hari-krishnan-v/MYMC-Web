const express = require('express');
const router = express.Router();
const {AddItem, getItemsByCategory} = require("../Controller/StoreActions");
const {Login} = require("../Controller/Auth");

// Middleware
router.use(express.json());

// Route to add a new store item
router.post('/add', AddItem);
router.get('/:category', getItemsByCategory);


// Route to auth
router.post('/login', Login);

module.exports = router;
