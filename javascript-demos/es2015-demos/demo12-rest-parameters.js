
function callMe(x,y,...others){

    console.log('arguments',arguments);
    console.log(`x=${x}\ty=${y}\tothers=${others}`);
    console.log(' ');
}

callMe(1,2,3,4,5);

