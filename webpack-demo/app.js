const http = require('http');
const urlM = require('url');

const server = http.createServer();

server.on('request', function(req, res) {


    const { pathname, query } = urlM.parse(req.url, true);

    var urlObj = urlM.parse(req.url, true);
    console.log(urlObj);
    var data = {
        id: 1,
        age: 18,
        name: 'yun'
    }





    if (pathname === '/getscript') {

        var scriptStr = `${query.callback}(${JSON.stringify(data)})`;
        res.end(scriptStr);


    } else {

        res.setHeader("Access-Control-Allow-Origin", "*");//可以跨域访问
        res.statusCode = 200;
        res.statusMessage = 'Found';

        res.end(req.method.toLowerCase());

    }
});

server.listen(3000, function() {
    console.log('http://127.0.0.1:3000');
});