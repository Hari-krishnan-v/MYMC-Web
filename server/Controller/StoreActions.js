const StoreItem = require('../models/StoreItems');

 const AddItem = async (req,res)=>{
    const { name, description, price, category } = req.body;
    if (!name || !price || !category) {
        return res.status(400).json({ error: 'Name, price, and category are required' });
    }
    const duplicateItem = await StoreItem.findOne({ name });
    if (duplicateItem) {
        return res.status(400).json({ error: 'Item already exists' });
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

const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    if (!name || !price || !category) {
        return res.status(400).json({ error: 'Name, price, and category are required' });
    }

    try {
        const updatedItem = await StoreItem.findByIdAndUpdate(id, { name, description, price, category }, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update item' });
    }
}

const deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedItem = await StoreItem.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete item' });
    }
}
module.exports = { AddItem, getItemsByCategory , updateItem, deleteItem };