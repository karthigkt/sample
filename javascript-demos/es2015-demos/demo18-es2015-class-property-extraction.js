
class Counter{
    constructor(value=0){
        this.value=value;
    }

    increment(delta=1){
        this.value+=delta;
        return this.value;
    }

    decrement(delta=1){
        this.value-=delta;
        return this.value;
    }

    getValue(){
        return this.value;
    }

    reset(value=0){
        this.value=value;
    }

    toString=function(){
        return `Counter[${value}]`;
    }
    
}


let {increment,decrement}=new Counter(5);  //create a variable increment to point to property of new Object with same name

//after extraction increment became an independent function
//it looses this


while(increment()<10)
    console.log('hello world');



let {increment:inc, decrement:decr} =new Counter(5);

for(let i=0;i<5;i++)
    inc();

let c=0;

while(decr()>=0)
    c++;

console.log('c after decrement',c);

