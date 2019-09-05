

function sendEmail(email){
    console.log(`sending email to ${email}`);
    
}

let p1={ name:'Vivek', email:'vivek@conceptarchitect.in',phone:'903393939'};

let dept={departmentName:'Accounts', email:'accounts@someone.com',phone:'39393939'};

sendEmail(p1.email); //we need to manually extract email from the object
sendEmail(dept.email); //we need to manually extract the email from the object


//get phone property from the passed argument. I don't care about the rest
function sendOtp({phone}){
    console.log(`sending otp to ${phone}`);
    
}

sendOtp(p1); //no need to extract value. function wil automatically do it
sendOtp(dept);

