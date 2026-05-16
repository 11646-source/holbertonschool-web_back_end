// 5-http.js

const http = require('http');
const fs = require('fs');

const database = process.argv[2];

/**
 * Count students from CSV database
 * @param {string} path
 * @returns {Promise<string>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      const fields = {};

      students.forEach((student) => {
        const record = student.split(',');
        const firstname = record[0];
        const field = record[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      let output = `Number of students: ${students.length}`;

      Object.keys(fields).forEach((field) => {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });

      resolve(output);
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;

    let response = 'This is the list of our students';

    try {
      const students = await countStudents(database);
      response += `\n${students}`;
    } catch (err) {
      response += `\n${err.message}`;
    }

    res.end(response);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app; 
