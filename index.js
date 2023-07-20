const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;

//
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
