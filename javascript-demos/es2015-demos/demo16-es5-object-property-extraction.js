
var Counter=function(value){
    if(value===undefined)
        value=0;

    this.increment=function(delta){
        if(delta===undefined)
            delta=1;
        value+=delta;

        return value;
    }

    this.decrement=function(delta){
        if(delta===undefined)
            delta=1;
        value-=delta;

        return value;
    }

    this.value=function(){
        return value;
    }

    this.reset=function(newValue){
        value=newValue;
    }

    this.toString=function(){
        return 'Counter['+value+']';
    }
    
}


let c1=new Counter(5);

let increment=c1.increment; //take increment function from the counter

while(increment()<10)
    console.log('hello world');


//example 2

let c3=new Counter(5);
let inc=c3.increment;
let decr=c3.decrement;

for(let i=0;i<5;i++)
    inc();

let c=0;

while(decr()>=0)
    c++;

console.log('c after decrement',c);

