
function power(x,y){
    if(y===undefined)
        y=0.5;
    return Math.pow(x,y);
}

console.log('power(4,3) ='+power(4,3));
console.log('power(4)', power(4));
