const express = require('express');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],

}));
app.use((req, res, next) => {
  console.log("Incoming Request:", req.method, req.url);
  next();
});
app.use(express.json());


app.use('/api/tickets', ticketRoutes);

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
