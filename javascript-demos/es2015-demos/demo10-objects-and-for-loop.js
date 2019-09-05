

let obj={
    name:'prabhat',
    age:20,
    email:'prabhat@gmail.com'
};
console.log('using for-in with object');

for(let x in obj){
    // person.name is same sas person["name"]
    console.log(`${x} =>  ${obj[x]}`);
}


console.log('simple for and for-of doesnt work on objects');

for(let x of obj)
    console.log(x);

    


