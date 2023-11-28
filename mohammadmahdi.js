let http = require('http');
let port = 8037;
let server = http.createServer(requestHandler4);
server.listen(port);
console.log("Server is running on port:" + port);
let headers={
    text: { 'Content-Type': 'Text/Plain' },
    html: { 'Content-Type': 'Text/Html' }
}
function chall5(response) {
    console.log('this is page1controllerC');
    response.writeHead(200, headers.txt);
    response.write("challenge 5: salam mohammadmahdi!");
    response.end();
}


function chall6(response) {
    response.writeHead(200, headers.html);
    response.write(`<html>
    <head>
        <style>
            div{
                width: 200px;
                height: 50px;
                background-color: lightgreen;
                padding: 20px;
            }
        </style>
    </head>
    <body>
    <div>
    <b>challenge 3</b></br>
    salam
    </div>
    </body>
    </html>`);
    response.end();
} 
function chall8(response) {
    fs.readFile('./ch2.html', function (error, data) {
        if(error){
            console.log(error);
        }
        else{
            response.writeHead(200, headers.html);
            response.write(data);
            response.end();
        }

    })
}
let routes = {
  ch5:chall5,
  ch6:chall6,
ch8:chall8
}   
function requestHandler4(request, response) {
    console.log('url ', request.url);
    console.log('splitted ', request.url.split('/'));
    let firstPart = request.url.split('/')[1];
    console.log('fistPart ', firstPart);

    if (firstPart !== 'favicon.ico') {
        routes[firstPart](response);
    }
}
