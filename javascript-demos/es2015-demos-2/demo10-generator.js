


let table= function *(number,max=10){

    for(let i=1;i<=max;i++){
        console.log(`calculating ${i}*${number}`);
        yield number*i;
    }
}

function showNext(header, g){
    let i=g.next();
    if(!i.done)
        console.log(header,i.value);
}

let g=table(18,5);

console.log('generator created'); 

//we reach the first yeild on first call of g.next()

showNext('first request',g);  //it iterates only till it reaches next yeild statement

//no calculation is done till you make a second call

showNext('second request',g);



