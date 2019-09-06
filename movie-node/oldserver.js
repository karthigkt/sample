
const http = require('http');

let sendDate = function (req, res) {
    let d = new Date();
    res.write(d.toLocaleDateString());
    res.end();
}

let sendTime = function (req, res) {
    let d = new Date();
    res.write(d.toLocaleTimeString());
    res.end();
}

let sendWelcome = function (req, res) {
    res.write(`
        <html>
            <head>
            </head>
            <body>
                <h1>Welcome to Movie Node </h1>
                <p>Welcome to Movie Node</p>
            </body>
        </html>    
    `);
};

const map = {
    "/": sendWelcome,
    "/date": sendDate,
    "/time": sendTime
};

const fs = require('fs');

let sendStatic = function (req, res, cb) {
    let url = req.url;
    let actualPath = `${__dirname}/public${url}`;
    if (fs.existsSync(actualPath)) {
        fs
            .createReadStream(actualPath)
            .pipe(res);
            // .on('finish', () => {
            //     console.log('page served!');
            //     cb(null)
            // }); //resource is handled

            cb(null); //no need to serve anything else
    } else {
        cb(new Error('not static resource'));//failed to handle
    }

}

const http = require('http');
let requestHandler = function (req, res) {
    let url = req.url;
    if(url==='/')
        req.url='/index.html'; //no url means index.html request
    sendStatic(req, res, (err) => {
        if (err) { //this is not a static resource
            //try handling is dynamically
            console.log('request for ', url);
            if (map[url]) {
                fn = map[url];
                fn(req, res);
            } else {
                res.statusCode = 404;
                res.write(`<h1>Not Found:${url}</h1>`);
                res.end();
            }
        }
    })
};

let server = http.createServer(requestHandler);
//start the server
server.listen(8000, (err) => {
    if (err)
        console.log('error starting server:', err.message);
    else
        console.log('server started...');
});