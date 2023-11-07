let http = require('http');
let server = http.createServer(requestHandler);
server.listen(8037);

let headers = {'Content-Type': 'Text/plain'}

function requestHandler (request, response){
    console.log('request url: ',request.url);
    console.log('request method: ', request.method);

    response.writeHead(200, headers);
    response.write('Salam'+request.url);
    response.end();
}