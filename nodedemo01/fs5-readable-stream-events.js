const fs = require('fs');

let path = 'test-data.txt';

let content='';
let readCount=0;

console.time(path);
console.log('reading...');

fs
    .createReadStream(path)
    .on('data', data=>{
        readCount++;
        content+=data.toString();
        process.stdout.write('+ ');
    })
    .on('end', ()=>{        
        //console.log('----content---');
        //process.stdout.write(content);
        //console.log('-----end content----');
        console.timeEnd(path);
    })
    .on('error',(error)=>console.log('error', error.message));



 

