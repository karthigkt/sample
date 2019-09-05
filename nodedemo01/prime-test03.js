const {findPrimes}=require('./libs/primes');


function printPrimeInfo(min,max){

    let label=`finding primes betwee ${min}-${max}`;


    console.time(label);
    let primes= findPrimes(min,max,(err,primes)=>{
        if(err){
            console.log('error',err.message);
        } else {
            console.log(label, primes.length);
        }
        console.timeEnd(label);    
    });


    console.log(label);

}

printPrimeInfo(2,500000);

printPrimeInfo(2,50000);

printPrimeInfo(2,10000);




