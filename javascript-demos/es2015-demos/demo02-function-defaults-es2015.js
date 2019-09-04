
function power(x,y=0.5){
    return Math.pow(x,y);
}

console.log('power(4,3) ='+power(4,3));
console.log('power(4)', power(4));

function average(x=1,y=x){
    return (x+y)/2;
}


console.log('average(5,7)',average(5,7)); //average(5,7)

console.log('average(5)',average(5)); //averge(5,5)

console.log('average()',average()); //average(1,1)


