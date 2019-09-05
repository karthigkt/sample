

function showThisValue(){

    console.log('direct log',this.value);  //this.value refers to invoking object x.value
    //here this is object x
    let _this=this;

    let print=function(message){
        //here this is whoever invokes this function. may not be same as above. in our example this is undefined
        //console.log(message,this.value);  //it is not using this from the outer context
        console.log(message,_this.value);  //it is not using this from the outer context
    }

   //lambda doesn't have its own this. it uses this from the closure
    let display=(message)=> console.log(message,this.value);

    print('using print function');  //there is not invoking object here. so this is window/undefined not x

    display('using display lambda') //using this from the showThisValue()

}

let x={
    value: 20,
    show:showThisValue
};

x.show(); // showThisValue