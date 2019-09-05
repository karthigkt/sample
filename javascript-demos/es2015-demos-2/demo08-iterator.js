

function f1() {
    return 1;
    return 2;
    return 3;
}


let x = f1();
console.log('x', x);
console.log('typeof(x)', typeof (x));


//ES2015 yeild keyword
//A function with yield should be prefixed with *
function* f2() {
    
    yield 1;
    yield 2;
    yield 3
}

//function returns a generator object and not 1,2,3
let y = f2();

console.log('y', y);
console.log('typeof(y)', typeof (y));

//each call of venerator returns {value,done} --> value is yieled value done is if all values are seen
console.log('y.next()', y.next()); //{ value: 1, done: false }
console.log('y.next()', y.next()); //{ value: 2, done: false }
console.log('y.next()', y.next()); //{ value: 3, done: false } //we still dont know if there is more to yield

console.log('y.next()', y.next()); //{value:undefined, done:true} //end of values


//a generator can be used with while loop

function loopWhile(header,g) {
    console.log(header);
    let i = g.next();
    while (!i.done) {
        console.log(i.value);
        i = g.next(); //go to next position
    }
}


//we can obtains genrator by invoking f2()

let g= f2();

loopWhile('using while loop with generator',g);

//once iteration is complete, g can't be reused

loopWhile('using same genrator to loop a second time',g);


//we can get new generator by calling source again

g=f2(); //new generator

loopWhile('working with new generator', g);