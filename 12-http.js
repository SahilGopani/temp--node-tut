const http = require('http');

const server = http.createServer((req, res)=> {
    // console.log(req);
    if (req.url === '/'){
        res.end('Welcome to our Home Page')
    }
    if(req.url === '/about'){
        res.end('Here is our short History')
    }

    res.end(`
    </h1> OOPS!!! </h1>
    <p> We Can't seems to find the Page You are Looking For </p>
    <a href ="/">back home </a>
    `)

    // res.write('Welcome to our Home Page')
    // res.end()
})

server.listen(5555)








const rock = require('http');

const net = rock.createServer((req, res) => {
    
})








