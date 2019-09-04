

//ES2015 .... var args collect operator
//all supplied argument will be collected as an array
function average(...numbers){
    let sum=0; //ES2015 new keyword let to replace var
    const size=numbers.length; //ES2015 new keyword const for non-changable reference
    
    //ES2015 for-of loop
    // loops throug each value of an array
    for(let number of numbers){
        sum+=number;
    }

    return sum/size;
}

console.log('average(10,20,30,40)',average(10,20,30,40)); //numbers=[10,20,30,40]

console.log('average(5,9,7)',average(5,9,7));







