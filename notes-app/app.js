const fs = require('fs');

fs.writeFileSync("notes.txt",'This file is created by Node.js.');

fs.appendFileSync('notes.txt', ' I live in India');