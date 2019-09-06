const {getPrimes}=require('./libs/primes');

//async means function includes await
//the function will not terminate immediately
async function printPrimeInfo(min,max){

    let label=`finding primes betwee ${min}-${max}`;
    try{
       
        console.time(label);
        console.log(label);
        //wait for promise to resolve
        //then extract value and return
        let primes= await getPrimes(min,max);
        //next lines shall execute only when
        //promise resolves
        console.log('primes',primes.length);
    
    } catch(err){
        console.log('error',err);
    }
    console.timeEnd(label);
        
}

//this function will not finish immediately
//but shall return immediately
printPrimeInfo(2,5000); 

//we are free to do the next job
//the previous function will finish its work
//on its own time
printPrimeInfo(2,50000);

printPrimeInfo(100,1);

printPrimeInfo(2,10000);




