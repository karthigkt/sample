
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

function printValue(value){
    console.log(value);
}


function search(values, fnMatch, fnAction){
    for(let value of values)
        if(fnMatch(value))
            fnAction(value);
}

//search original values for isPrime and then print matching values
search(original, isPrime, printValue);

class Counter{
    constructor(){
        this.value=0;
        this.increment=this.increment.bind(this);
        
    }
    increment(){
        this.value++;
    }    
}
let c=new Counter();

search(original, isPrime, c.increment);

console.log('total primes',c.value);

let max=undefined;
function findMax(value){
    if(max===undefined || max<value)
        max=value;
}

search(original, isPrime, findMax);

console.log('max prime is',max);
