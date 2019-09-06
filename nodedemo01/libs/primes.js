

function isPrimeSync(number) {
    if (number < 2)
        return false;

    for (let i = 2; i < number; i++)
        if (number % i == 0)
            return false;

    return true;
}

function findPrimesSync(min, max) {
    let primes = [];
    for (let i = min; i < max; i++) {
        if (isPrimeSync(i))
            primes.push(i);
    }
    return primes;
}

function findPrimes(min, max, cbNext) {


    setTimeout(
        function () {
            if (max < min)
                //report an error
                cbNext(new Error(`bad range (${min}>${max}`));

            let primes = findPrimesSync(min, max);

            //report a success
            cbNext(null, //no error
                primes //actual result
            );
        }
        , 2000);


}

function getPrimes(min, max) {


    let p = new Promise((resolve, reject) => {
        setTimeout(() => {

            if (max < min)
                reject(`Invalid Range max ${max} is greater than min ${min}`);

            let primes = findPrimesSync(min, max);
            resolve(primes);
        }, 2000);
    });

    return p;

}

function nextPrimeSync(value) {
    while (!isPrimeSync(value))
        value++;

    return value;
}


const { EventEmitter } = require('events'); //nodejs internal module

function fetchPrimes(min, max, taskId = null) {

    if (taskId===null)
        taskId = `fetchPrimes(${min},${max})`;

    let event = new EventEmitter(); //create the event object

    let id = 0;
    setTimeout(() => {

        let start = Date.now(); //total time in ms

        if (max < min) {
            //notify user of the error
            clearInterval(id);
            return event.emit('error',{taskId:taskId, message:`invalid range (${max}-${min})`});
        }

        let number = min;
        let count = 0;
        
        let prime=0;
        id = setInterval(() => {
            prime = nextPrimeSync(number);
            
            if (prime > max) {
                //all primes are found
                //let user know work is over. 
                //also let user know how many primes you found in total
                let end=Date.now();

                event.emit('completed', {taskId:taskId, primes: count, timeTaken:end-start});
                //we must stop setInterval to return to this function any more
                clearInterval(id); //now setInterval is cancelled
            } else {
                count++;
                //let user know you found a prime and index of the prime
                event.emit('prime', {taskId:taskId, prime:prime, index:count});
                number=prime+1;
            }

        }, 10); //do the work every 10 ms




    }, 1);


    return event;

}


module.exports = {
    isPrimeSync,
    findPrimes,
    findPrimesSync,
    getPrimes,
    fetchPrimes
};


