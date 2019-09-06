const {range}=require('./utils'); //my utils module (starts with ./)

const util=require('util'); //this is nodjs preinstalled util module

const {Readable}=require('stream');


let RangeStream=function(min=0,max,maxInclusive=false){

    this.min=min;
    this.max=max;
    this.maxInclusive=this;

    //STEP 1: convert RangeStream To ReadableStream
    Readable.call(this);
}

//STEP 2: Inherit your class from Readable
 util.inherits(RangeStream, Readable) //RangeStream inherits Readable

 //STEP 3: implement _read() function
 RangeStream.prototype._read=function(){

    //This function should emit events like 'read' and 'end'
    let _this=this;
    let max= this.max + this.maxInclusive?1: 0;

    range(this.min,max)
        .on('number',number=>{  //range emits an event number
            //we should conver that event to 'data'
            //stream takes a Buffer not normal values
            let data=Buffer.from(`${number}`);
            //emit 'data' event
           // _this.emit('data',data);
           _this.push(data); //it emits 'data'

        })
        .on('end', ()=>{
            //_this.emit('end');
            _this.push(null); //this emits 'end'
        })


 };


const {fetchPrimes}=require('./primes');


let PrimeStream = function(min,max){
    this.min=min;
    this.max=max;
    Readable.call(this);
};


util.inherits(PrimeStream, Readable);

PrimeStream.prototype._read=function(){

    let _this=this;

    fetchPrimes(this.min,this.max)
        .on('prime',info=>{
            let buffer=Buffer.from(JSON.stringify(info));
            //_this.push(buffer); //should emit 'data'
            _this.emit('data',buffer);
        })
        .on('completed',()=>{
            _this.emit('end');
        });


}






 module.exports={
     RangeStream,
     PrimeStream
 };

