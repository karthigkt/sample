
//----- utitlity funciton (service layer)

function printValue(header){

    let headerPrinted=false;
    //individual values will be printed by this function
    return function(value){
        if(!headerPrinted){
            console.log(header);
            headerPrinted=true;
        }
        console.log(value);
    };
}


function search(values, fnMatch, fnAction){
    for(let value of values)
        if(fnMatch(value))
            fnAction(value);
}

//---- main logic of the program (client layer)

let original=[2,3,9,24,11,7,15,24,29,37,55,62,82,71];
console.log('original',original);

function isPrime(number){
    if(number<2) return false;
    for(let i=2;i<number;i++)
        if(number%i==0)
            return false;

    return true;
}

search(original, isPrime, printValue('primes'));

//how to find multiples of 5
let  m5= function (value) {return value%5==0;};
search(original, m5, printValue('multiples of 5'));


search(original, function(n){return !isPrime(n)}, printValue('Non Primes'));


//ES 2015 : Lambda Express

//let  odd= function (value) {return value%2!=0;};

//let odd= (value) => {return value % 2!=0; };

//if a lambda has a single statement (return)
// you can omit {}, return , inner semicolong

let odd= value => value%2!=0; //same as above

search(original, odd, printValue('odds'));


search(original, n=>n%3==0 , printValue('mulitples fo 3'));



