
function _search(values, fnMatch){
     
    let result=[];
    for(let value of values)
        if(fnMatch(value))
            result.push(value);

    return result;
}

function *search(values, fnMatch){
     
    
    for(let value of values)
        if(fnMatch(value))
            yield value;

    
}




function printSingle(object){
    if(typeof(object)!=='object')
        return console.log(object);

    for(let key in object){
        console.log(`${key} : ${object[key]}`);
    }

}

function getLine(object){
    if(typeof(object)!='object')
        return object;
    
    let str='';
    for(let key in object){
        str+=object[key]+"\t";
    }

    return str;

}

function showList(header, list){
    console.log(header);
    for(value of list)
        console.log(getLine(value));
}

function show(header, ...objects){

    console.log(header);
    
    if(objects.length===1){
        printSingle(objects[0])
    } else
        for(var object of objects)
            console.log(getLine(object));

}

const {EventEmitter}=require('events');

function range(min=0,max){

    let event=new EventEmitter();

    setTimeout(()=>{

        for(let count=min;count<=max;count++){
            event.emit('number', count);

        }

        event.emit('end');

    },5); //gives client sometime to write the .on() handler

    return event;

}







//unsupported ES2015 feature
// export {
//         search:search
//     };

//NodeJS export

module.exports.search=search;  //this module is exporting search() functions
module.exports.show=show;
module.exports.showList=showList;
module.exports.range=range;
//getLine() and printSingle() is not exported
//they can't be accessed outside this file