const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

// Create User Model
const User = mongoose.model("User", userSchema);

// Use User.find() and User.create() instead of the `users` array in your logic
