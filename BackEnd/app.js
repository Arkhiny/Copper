const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const authRoutes = require('./routes/authRoutes'); // Import your auth routes

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:4000', // Your frontend's URL
  credentials: true,
}));

app.use(express.json());

app.use('/api/auth', authRoutes); // Authentication routes

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});