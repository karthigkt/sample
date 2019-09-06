const {RangeStream}=require('./libs/streams');
const {range}=require('./libs/utils');


// new RangeStream(1,10)
//     .on('data', d=> process.stdout.write(d))
//     .on('end', ()=>console.log('---'));

//range(1,10).on('number',n=>console.log(n)).on('end',()=>console.log('---'));

let rs=new RangeStream(1,10);

rs.on('data', d=>console.log(d.toString())).on('end',()=>console.log('---'));