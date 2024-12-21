const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(express.json()); // Middleware to parse JSON requests

// Simulating a database of users
const users = [];

app.post("/api/auth/signup", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: "User created successfully" });
});

// Login Endpoint
app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);
    if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ username }, "secret_key", { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
});

// Start the Express server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
