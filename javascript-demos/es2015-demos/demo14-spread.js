function plus(x,y){
    return x+y;
}

console.log('plus(2,3)',plus(2,3));

let values=[2,9,1,8,11];

console.log('plus(...values)',plus(...values));

let evens=[2,4,6,8];

let odds=[1,3,5,7];


let all= [...evens, 0, ...odds];

console.log('all',all);