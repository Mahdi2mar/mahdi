let http=require('http');
let server =http.createServer(requestHandler);
server.listen(8037);

console.log('server is running');
let headers={'Content-Type':'Text/Plain'};

let a=6;
let b=3;

let obj={

    g: function(){

      


        console.log(a+b);

    },

    h: function(){

        console.log(a-b);
        response.writeHead(200,headers);
    response.write('salam '+request.url);
    response.end();

    },

    "favicon.ico":function(){

        console.log('favicon');
        response.writeHead(200,headers);
    response.write('salam '+request.url);
    response.end();
    }



    
}

function requestHandler (request, response){
    
    console.log('request url: ', request.url);
    console.log('request method: ', request.method);
 
    let firstpart=request.url.split('/')[1];

    console.log(firstpart);

     obj[firstpart]();

    
}
