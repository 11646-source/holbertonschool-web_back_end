// 3-readfile js

const fs = require('fs');

function countStudents(path) {
	return new promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(new Error('cannot load the database'));
				return;
			}
