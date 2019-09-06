const {createReadStream,createWriteStream}=require('fs');


let src='test-data.txt';
let trgt='test-data-pipe.txt';


let t= createWriteStream(trgt);

createReadStream(src)       //take the data pipe to zip stream
    //.pipe(new ZipStream())  //compless the data pipe to next
    //.pipe(new EncryptStream()) //encrypt the data pipe to next
    .pipe(t)                //write the compressed data
    .on('finish',()=>console.log('copy successful'));

