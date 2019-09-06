const {fetchPrimes}=require('./libs/primes');

//async means function includes await
//the function will not terminate immediately
function printPrimeInfo(min,max){

    let label=`primes between ${min}-${max}`;
       
    fetchPrimes(min,max,label)
    .on('error',data=>{
        console.log(data.taskId, data.message);
    })
    .on('prime',data=>{
        console.log(data.taskId, data.index, data.prime);
    })
    .on('completed',data=>{
        console.log(`${data.taskId} found ${data.primes} primes in ${data.timeTaken} ms`);
    });

    console.log('finding',label);
        
}

printPrimeInfo(2,100); 

printPrimeInfo(100,200);

printPrimeInfo(200,100);






