const {range}=require('./libs/utils');

let sum=0;
let count=0;
let average=0;

range(1,100)
    .on('number', n=>{
        sum+=n;
        count++;
    })
    .on('end',()=> {
        average=sum/count;
        console.log('sum',sum);        
        console.log('average',average); //safe to print the average
    });

//we will reach here before range is completed
console.log('finding average...'); 