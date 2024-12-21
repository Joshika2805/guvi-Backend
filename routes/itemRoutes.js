const express = require('express');
const { addItem, getItemById } = require('../controllers/itemController');
const {
    getItems,
    updateItem,
    deleteItem
} = require('../controllers/inventoryController');
const router = express.Router();

// Define routes for inventory items
router.get('/', getItems); // Get all items
router.post('/', addItem); // Add a new item

// Define routes with item ID
router.get('/:id', getItemById); // Get a specific item by ID
router.put('/:id', updateItem); // Update an existing item
router.delete('/:id', deleteItem); // Delete an item

module.exports = router;
