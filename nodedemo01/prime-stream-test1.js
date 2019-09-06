const {PrimeStream}=require('./libs/streams');


let ps=new PrimeStream(1,100);

// ps
//     .on('data',d=>console.log(d))
//     .on('end',()=>console.log('end'));


ps.on('data',d=> process.stdout.write(d));

