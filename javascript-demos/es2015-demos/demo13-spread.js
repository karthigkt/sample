
function average(...numbers){
    let sum=0;
    const size=numbers.length; 
    for(let number of numbers){
        sum+=number;
    }
    return sum/size;
}
console.log('average(1,2,3,4)',average(1,2,3,4));
let values=[1,2,3,4,5];
console.log('average(values)',average(values));
//spread syntax
console.log('average(...values)',average(...values));
