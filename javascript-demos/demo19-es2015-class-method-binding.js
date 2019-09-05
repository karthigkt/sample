
class Counter{
    constructor(value=0){
        this.value=value;

        //make sure this function always uses current object as this
        this.increment=this.increment.bind(this); 
        this.decrement=this.decrement.bind(this);
        this.getValue=this.getValue.bind(this);
        this.reset=this.reset.bind(this);
        this.toString=this.toString.bind(this);
        
        
        
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

//after extraction increment (being bind method) still retains orginal this context



while(increment()<10)
    console.log('hello world');



let {increment:inc, decrement:decr} =new Counter(5);

for(let i=0;i<5;i++)
    inc();

let c=0;

while(decr()>=0)
    c++;

console.log('c after decrement',c);

