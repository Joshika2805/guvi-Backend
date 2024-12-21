const Item = require('../models/Item');

// Add a new item
exports.addItem = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const newItem = new Item({ name, description, price, stock });

    try {
        await newItem.save();
        res.status(201).json({ message: 'Item added successfully', item: newItem });
    } catch (err) {
        res.status(500).json({ message: 'Error adding item', error: err.message });
    }
};

// Get a specific item by ID
exports.getItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch item', error: err });
    }
};
