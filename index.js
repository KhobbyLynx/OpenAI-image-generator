const path = require('path');
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const openaiRoutes = require('./routes/openaiRoutes');

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/openai', openaiRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));