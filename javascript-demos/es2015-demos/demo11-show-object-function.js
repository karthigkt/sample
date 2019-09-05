

function showObject(obj){
    for(let x in obj){
        // person.name is same sas person["name"]
        console.log(`${x} =>  ${obj[x]}`);
    }
    console.log(' ');
}

let p1={name:'Prabhat',email:'prabhat@gmail.com'};
let p2={name:"Shivanshi",phone:"993939393"};
let p3={x:3, y:5, z:-2};

showObject(p1);
showObject(p2);
showObject(p3);

