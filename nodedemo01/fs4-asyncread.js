const fs = require('fs');

let path = 'main9.js';

console.time(path);
console.log('reading...');

 fs.readFile(path, (err, data) => {

    if (err) {
        console.log('error', err.message);
    } else {

        console.timeEnd(path);
        console.log('----content---');
        process.stdout.write(data);
        console.log('-----end content----');
    }

});

