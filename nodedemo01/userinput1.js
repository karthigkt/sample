const readline=require('readline');

let kb = readline.createInterface(process.stdin,process.stdout);

kb.question('name?', name=>{
    kb.question(`Hello ${name}, whats your email?`,email=>{
        console.log(`Hello ${name} thaks for your email ${email}`);
        kb.close(); //close after last question
    });
});

