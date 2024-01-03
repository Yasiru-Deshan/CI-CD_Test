const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Sample data
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get a specific user
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Create a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.status(201).json(newUser);
});

// Update a user
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  const index = users.findIndex((u) => u.id === userId);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);

  res.json({ message: "User deleted successfully" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
