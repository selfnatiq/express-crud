const express = require('express');
const connectDB = require('./config/db');
const { urlencoded } = require('express');
const bodyParser = require('body-parser');

require('dotenv').config({ path: './config/config.env' })

connectDB();

const app = express();

app.set('view engine', 'ejs');
app.use(urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('./routes/index-routes'))


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));