const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');

const items = require('./routes/api/items');

const app = express();

// Middleware
app.use(express.json());

// Connect to Mongo
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err.message));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
