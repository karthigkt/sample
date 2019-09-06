const fs=require('fs');

let path='main.js';

console.time(path);
console.log('reading...');

let data=fs.readFileSync(path);

console.timeEnd(path);
console.log('----content---');

process.stdout.write(data);

console.log('-----end content----');