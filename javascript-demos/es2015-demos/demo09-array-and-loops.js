

let values=[2,3,9,2,6];

console.log('using simple for loop');
for(var i=0; i<values.length;i++)
    console.log(`${i} => ${values[i]}`);

console.log('using for-in loop');
for(let x in values){
    console.log(`${x} => ${values[x]}`);    
}

//ES2015 NEW FEATURE
console.log('using for-of-loop');
for(let value of values)
    console.log(`${value}`);
    
    

