
let original=[2,3,9,24,11,7,15,24,29,37,55,62,82,71];
console.log('original',original);

function fast_isPrime(number){
    if(number<2) return false;
    for(let i=2;i<=number/2;i++)
        if(number%i==0)
            return false;

    return true;
}

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
function search(values, fnMatch){
    let result=[];
    for(let value of values)
        if(fnMatch(value))
            result.push(value);
    return result;
}
function main(){
    let primes1= searchPrimes(values);
    let primes2= search(values, isPrime);
}
main();