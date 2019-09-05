

function isPrimeSync(number){
    if(number<2)
        return false;

    for(let i =2;i<number;i++)
        if(number%i==0)
            return false;

    return true;
}

function findPrimesSync(min,max){
    let primes=[];
    for(let i=min;i<max;i++){
        if(isPrimeSync(i))
            primes.push(i);
    }
    return primes;
}

function findPrimes(min,max,cbNext){

    
    setTimeout(
    function(){
        if(max<min)
            //report an error
            cbNext(new Error(`bad range (${min}>${max}`));

        let primes=findPrimesSync(min,max);

        //report a success
        cbNext(null, //no error
           primes //actual result
            );
    }
    ,2000);

    
}

function getPrimes(min,max){


    let p=new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(max<min)
                reject(`Invalid Range max ${max} is greater than min ${min}`);

            let primes=findPrimesSync(min,max);
            resolve(primes);
        },2000);
    });

    return p;

}


module.exports={
    isPrimeSync,
    findPrimes,
    findPrimesSync,
    getPrimes  
};


