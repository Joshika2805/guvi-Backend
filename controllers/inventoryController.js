const Item = require('../models/Item');

// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch items', error: err });
    }
};

// Update an existing item
exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;

    try {
        const item = await Item.findByIdAndUpdate(id, { name, description, price, stock }, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: 'Error updating item', error: err });
    }
};

// Delete an item
exports.deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await Item.findByIdAndDelete(id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting item', error: err });
    }
};
