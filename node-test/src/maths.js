
function divide(x,y){
    if (y==0)
        throw new Error('Divide By Zero');
    return Math.floor(x/y);
    //return x/y;
}

module.exports={
    divide
};

