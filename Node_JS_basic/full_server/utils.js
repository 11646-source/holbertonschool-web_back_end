import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const studentsPerField = {};

      // Skip header line (i = 1)
      for (let i = 1; i < lines.length; i += 1) {
        if (lines[i].trim()) {
          const [firstname, , , field] = lines[i].split(',');
          if (firstname && field) {
            if (!studentsPerField[field]) {
              studentsPerField[field] = [];
            }
            studentsPerField[field].push(firstname);
          }
        }
      }
      resolve(studentsPerField);
    });
  });
}
