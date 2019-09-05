
let table= function *(number,max=10){

    for(let i=1;i<=max;i++)
        yield number*i;
}


console.log('using while loop to loop through table')

let g=table(19,5);
let i=g.next();
while(!i.done){
    console.log(i.value);
    i=g.next();
}


console.log('using for-of loop with generator');

for(number of table(18))
    console.log(number);

    