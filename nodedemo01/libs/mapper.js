const {Transform}=require('stream');
const util=require('util');

let Mapper=function( fnConverter  ){
    this.fnConverter=fnConverter;
    Transform.call(this);
}

util.inherits(Mapper, Transform);

Mapper.prototype._transform=function(data, encoding,callback){

    let incoming=data;
    
    let transformed= this.fnConverter(incoming,encoding);

    let outgoing= Buffer.from(transformed);

    this.push(outgoing); //push the data

    callback(); //inform the Transform that data has been added 


};

function map(fnConverter){
    return new Mapper(fnConverter);
};


module.exports={
    map
};