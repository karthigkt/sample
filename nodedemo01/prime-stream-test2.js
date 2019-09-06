const {PrimeStream}=require('./libs/streams');
const {map}=require('./libs/mapper');

let converter= buffer=>{
    let info= JSON.parse(buffer.toString()); //convert buffer to prime info
    let prime=info.prime; //{taskId:'x', index:2, prime:3}
    return `${prime} `; //'3'
};

new PrimeStream(1,100)    
    .pipe(map(converter))
    .pipe(process.stdout);

// ps
//     .on('data',d=>console.log(d))
//     .on('end',()=>console.log('end'));


//ps.on('data',d=> process.stdout.write(d));



