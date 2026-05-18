// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const database = process.argv[2];

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  let response = 'This is the list of our students';

  try {
    const students = await countStudents(database);
    response += `\n${students}`;
    res.status(200).send(response);
  } catch (err) {
    response += `\n${err.message}`;
    res.status(500).send(response);
  }
});

app.listen(1245);

module.exports = app;
