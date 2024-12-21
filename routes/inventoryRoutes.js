// inventoryRoutes.js
const express = require('express');
const { addItem } = require('../controllers/itemController');  // Correctly import addItem
const {
    getItems,
    updateItem,
    deleteItem
} = require('../controllers/inventoryController');
const router = express.Router();

// Define routes for inventory items
router.get('/', getItems); // Get all items
router.post('/', addItem); // Add a new item
router.put('/:id', updateItem); // Update an existing item
router.delete('/:id', deleteItem); // Delete an item

module.exports = router;

