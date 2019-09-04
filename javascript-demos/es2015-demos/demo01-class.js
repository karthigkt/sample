
class Person{
    
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(food){
        console.log(this.name+' eats '+food);    
    }

    toString(){
        return 'Person('+this.name+","+this.age+')';
    }
}

p1=new Person('Prabhat',35);
p2=new Person('Shivanshi',13);

p1.drive=function(v){
    console.log(this.name+' drives '+v);
}

p1.eat('lunch');
p2.eat('lunch');

Person.prototype.move=function(place){
    console.log(this.name+' goes to '+place);
}

p1.move('office');
p2.move('school');

p1.drive('car');
p2.drive('bike');