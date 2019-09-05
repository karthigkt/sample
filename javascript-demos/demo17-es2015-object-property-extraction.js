
var Counter=function(value=0){
    

    this.increment=function(delta=1){
        
        value+=delta;
        return value;
    }

    this.decrement=function(delta=1){
        if(delta===undefined)
            delta=1;
        value-=delta;
        return value;
    }

    this.value=function(){
        return value;
    }

    this.reset=function(newValue=0){
        value=newValue;
    }

    this.toString=function(){
        return `Counter[${value}]`;
    }
    
}


//let c1=new Counter(5);
//let increment=c1.increment; //take increment function from the counter

//create Counter object and get increment and decrement property of that object
//property name is matched with declared fields
let {increment,decrement}=new Counter(5);  //create a variable increment to point to property of new Object with same name

while(increment()<10)
    console.log('hello world');


//example 2

// let c3=new Counter(5);
// let inc=c3.increment;
// let decr=c3.decrement;

//How to reference object property with a different name
// let {increment,decrement}=new Counter(5);
// let inc=increment;
// let decr=decrement;

//how to reference object property with a different name

let {increment:inc, decrement:decr} =new Counter(5);



for(let i=0;i<5;i++)
    inc();

let c=0;

while(decr()>=0)
    c++;

console.log('c after decrement',c);

