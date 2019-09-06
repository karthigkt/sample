const fs = require('fs');

let src = 'test-data.txt';
let trgt= 'test-data-target-2.txt';
let s= fs.createReadStream(src);
let t= fs.createWriteStream(trgt);
let count=0;
let firstTime=true;
let buffer='';

console.log('copying...');

t
    .on('error', error=>console.log('error writing:',error.message))
    .on('close',()=>console.log(`${trgt} is closed`))
    .on('drain',()=>{    //step 3. writeable is ready to write
        s.pause();       //step 4. pause readable from sending anything
        //step 6. write data async
        process.stdout.write('d ');
        t.write(buffer, (err)=>{    
            if(!err){  // step 7. when data is written
                buffer=''; //step 8.empty the buffer
                process.stdout.write('- ');
                s.resume(); //step 9. resume readable so that it can send more data
            }
        });
    })
    

s
    .on('data', data=> {            //step 1. readable gets data
        //t.write(data.toString());
        if(firstTime){
            t.write(data.toString());
            firstTime=false;
        } else
            buffer+=data.toString();    //step 2. store data in buffer till writeable is ready
        count++;
        process.stdout.write('+ ')   ;
    })
    .on('end', ()=>{
        t.close();
        console.log(`file copied in ${count} chunks`);
    })
    .on('error', error=> console.log('error reading:',error.message));




