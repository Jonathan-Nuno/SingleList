const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('config');

// const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Mongo
const db = config.get('mongoURI');

mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err.message));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
