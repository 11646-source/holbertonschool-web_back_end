// 3-readfile js

const fs = require('fs');

function countStudents(path) {
	return new promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(new Error('cannot load the database'));
				return;
			}

			const lines = data
			.split('\n')
			.filter((line) => line.trim() !== '');

			const students = lines.slice(1);

			console.log(`Number of students: $[students.length}`);

			const fields = {};
