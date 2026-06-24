#!/usr/bin/node

// contains the function readDatabase to read the CSV file and return data in the desired format
// full_server/utils.js
import fs from 'fs';
import csv from 'csv-parse';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    const students = {
      CS: [],
      SWE: []
    };

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      csv.parse(data, {
        columns: true,
        trim: true
      }, (parseErr, records) => {
        if (parseErr) {
          return reject(new Error('Cannot load the database'));
        }

        records.forEach((record) => {
          if (record.Name && record.Programme) {
            if (record.Programme === 'CS') {
              students.CS.push(record.Name);
            } else if (record.Programme === 'SWE') {
              students.SWE.push(record.Name);
            }
          }
        });

        resolve(students);
      });
    });
  });
};
