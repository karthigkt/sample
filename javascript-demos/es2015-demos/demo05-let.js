
function showPoint(x,y){
    console.log(`Point(${this.x},${this.y})`);

}

var p1={x:3, y:4, show:showPoint};
p1.show();

var x=3; //added to global context
let y=4; //is not added to global context
showPoint(); //this refers to global context