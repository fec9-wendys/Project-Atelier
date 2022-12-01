require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});