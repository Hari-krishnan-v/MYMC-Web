const StoreItem = require('../models/StoreItems');

 const AddItem = async (req,res)=>{
    const { name, description, price, category } = req.body;
    if (!name || !price || !category) {
        return res.status(400).json({ error: 'Name, price, and category are required' });
    }
    try {
        const newItem = new StoreItem({ name, description, price, category });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add item' });
    }
}

const getItemsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const items = await StoreItem.find({ category });
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch items by category' });
    }
}

module.exports = { AddItem, getItemsByCategory };