const fs = require('fs');
const http = require('http');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8'); // __dirname is basically the home folder
const laptopData = JSON.parse(json); // will take a JSON string and give it back as a js object
const url = require('url');


const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, { 'Conent-type': 'text/html' })
        res.end('This is the PRODUCTS page!');

    } else if (pathName === '/laptop' && id < laptopData.lenght) {
        res.writeHead(200, { 'Conent-type': 'text/html' })
        res.end(`This is the LAPTOP ${id}!`);

    } else {
        res.writeHead(404, { 'Conent-type': 'text/html' })
        res.end('URL was not found on the server!');
    }


});


server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now');
});