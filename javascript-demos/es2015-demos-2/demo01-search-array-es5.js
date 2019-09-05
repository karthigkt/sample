
function isPrime(number){
    if(number<2) return false;
    for(let i=2;i<number;i++)
        if(number%i==0)
            return false;

    return true;
}

function searchPrimes(values){
    let result=[];
    for(let value of values)
        if(isPrime(value))
            result.push(value);
    return result;
}

function searchEvens(values){
    let result=[];

    for(let value of values)
        if(value%2===0)
            result.push(value);

    return result;
}

let original=[2,3,9,24,11,7,15,24,29,37,55,62,82,71];
console.log('original',original);

let evens= searchEvens(original);
console.log('evens',evens);


let primes=searchPrimes(original);
console.log('primes',primes);
