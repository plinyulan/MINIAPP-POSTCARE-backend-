require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM appointments");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

