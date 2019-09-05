

let f1=function(...params){
    console.log('params',params);
    console.log('arguments',arguments);
}

let f2=(...params)=>{
    console.log('params',params);
    console.log('arguments',arguments);  //lambda function doesn't have argument array
}


console.log('using anonymous function');

f1(1,2,3,4);

console.log('using lambda function');
f2(1,2,3,4);

