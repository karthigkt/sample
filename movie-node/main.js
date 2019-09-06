const express=require('express');

let app=express();

let stats={};

app.set('view engine', 'ejs');
app.set('views', 'views');
/*
app.use((req,res,next)=>{
    console.log('My middleware called for ',req.url);
    let url=req.url;
    if(stats[url]){
        let count=stats[url];
        count++;
        stats[url]=count;
    } else{
        stats[url]=1;
    }

    //res.send('my middle ware called');
    next(); //let other middleware do something
});
*/


//serve static files from public folder


app.get("/",(req,res)=>{
    console.log('serving /');
    app.render('movielist',{});
});

app.use( express.static("./public"));

app.get('/stats',(req,res)=>{

    res
        .contentType("application/json")
        .send(stats);

});




app.get('/time',(req,res)=>{
    //TODO: handle get
    res.write(new Date().toLocaleTimeString());
    res.end();
});


const port=8000;

//start listening on the port
app.listen(port, (err)=>{
    if(err)
        console.log('error starting server. port already in use');
    else
        console.log(`server started on port ${port}`);
})