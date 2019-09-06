const kb=require('readline-sync'); //it is a module preinstalled using npm


let name=kb.question('name?');

let email=kb.questionEMail('email?');

let password=kb.question('password',{hideEchoBack:true});

let choice=kb.keyInSelect(['Tiger','Lion','Deer','Dog']);

if(password!=='p@ss')
    console.log('authentication failed');
else{
    console.log('name',name);
    console.log('email',email);
    console.log('choice',choice);
    
}

