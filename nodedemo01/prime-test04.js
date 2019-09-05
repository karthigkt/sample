const {getPrimes}=require('./libs/primes');


function printPrimeInfo(min,max){

    let label=`finding primes betwee ${min}-${max}`;
    console.time(label);

    getPrimes(min,max)
        //on the promise
        .then( primes=>{  //success use case
            console.log(label, primes.length);
            console.timeEnd(label);
        })
        .catch(error=>{ //error use case
            console.log('error',error);
            console.timeEnd(label);
        });

        console.log(label);
}

printPrimeInfo(2,500000);

printPrimeInfo(2,50000);

printPrimeInfo(100,1);

printPrimeInfo(2,10000);




