

function outer(v){
    var x= v*5;
    let y= v*10;

    return function(factor){
        return {a: x*factor, b:y*factor};
    }
}

let o=outer(5); //x=25, y=50

let r=o(10); //{ a: 250, b:500}

console.log('r',r);

