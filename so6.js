let http=require('http');
let server =http.createServer(requestHandler);
server.listen(8037);

console.log('server is running');
let headers ={
    text: {'Content-Type': 'Text/Plain'},
    html: {'Content-Type': 'Text/Html'}
}
function page1controller(response){
    response.writeHead(200, headers.html);
    response.write(
        `<html>
            <body>
                <form>
                    <fildset>
                        <legend> login page: </legend>
                        <label for="user"> user name is : </label>
                        <input id="user"type="text"name="user"></input>
                        <label for="user"> password  is : </label>
                        <input id="user"type="pass"name="user"></input>
                        
                        
                        
                        
                        
                        
                        </fildset>
                    
                    
                </form>
            </body>
        </html>`
    )
}
let routes={
    x:funca,
    y:funcb,
    page1:page1controller

}




function requestHandler (request, response){
    
    console.log('request url: ', request.url);
    let x=request.url.split('/');
    console.log('splitted url: ',x);
    let firstpart=x[1];
    console.log('firstpart:',firstpart);

    if(firstpart !== 'favicon.ico')
    {
        routes[firstpart](response);
    }
}


function funca(){

    response.writeHead(200,headers);
    response.write('salam '+request.url);
    response.end();
}

function funcb(){

    response.writeHead(200,headers);
    response.write('salam '+request.url);
    response.end();
}