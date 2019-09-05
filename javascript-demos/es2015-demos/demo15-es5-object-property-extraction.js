
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
let c2=new Counter();

for(let i=0;i<5;i++){
    c1.increment();
    c2.increment();
}

console.log('after incrment');
console.log('c1.toString()',c1.toString());
console.log('c2.toString()',c2.toString());

while(c1.increment()<20)
    console.log(c1.value());





