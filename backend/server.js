require('dotenv').config();
const express = require('express');
const cors = require('cors');

const modelRoutes = require('./routes/models');
const uploadRoutes = require('./routes/upload');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/models', modelRoutes);
app.use('/upload', uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
