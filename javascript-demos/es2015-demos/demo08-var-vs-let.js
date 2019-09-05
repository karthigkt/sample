

let values=[2,3,9,2,6];

console.log('using simple for loop');
for(var i=0; i<values.length;i++)
    console.log(`${i} => ${values[i]}`);
console.log('value of i after loop:',i);

console.log('using for-in loop');
for(let x in values){
    console.log(`${x} => ${values[x]}`);    
}
console.log('value of x after loop:',x);

