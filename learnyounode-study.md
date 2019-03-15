# learnyounode 풀이

> 직접 푼 것

STEP 1

```
console.log("HELLO WORLD!");
```

STEP 2

```
var result = 0;

for (var i =2; i < process.argv.length; i++) {
    result = result + parseInt(process.argv[i]);
}

console.log(result);
```

STEP 3

```
var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var strs = buffer.toString().split('\n');

console.log(strs.length - 1);
```

STEP 4
```
var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    var strs = data.toString().split('\n');
    console.log(strs.length - 1);
});
```
STEP 5 

```
var fs = require('fs');
var path = require('path');
var extname = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
    list.forEach(element => {
        if (path.extname(element) == extname)
            console.log(element);
    });
});
```

STEP 6
- program.js
```
var mymodule = require('./mymodule.js');
var extname = process.argv[3];

mymodule(process.argv[2], extname, 
    function callback(err, list) {
        list.forEach(element => {
            console.log(element);
        });
    });
```

- mymodule.js
```
var fs = require('fs');
var path = require('path');
var array = Array();

module.exports = function (dir, extname, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) 
            return callback(err);

        list.forEach(element => {
            ext = path.extname(element)
            if (ext.substring(1, ext.length) === extname) {
                array.push(element);
            }
        });

        return callback(null, array);
    })
}
```

STEP 7
```
var http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
        console.log(data);
    })
});
```

STEP 8
 ```
 var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
            var str = data.toString();
            console.log(str.length);
            console.log(str);
        }));
});
```

STEP 9
```
var http = require('http');
var bl = require('bl');
var array = Array(3);
var count = 0;

for (let index = 2; index < (process.argv).length; index++) {
    const element = process.argv[index];
 
    http.get(element, function (response) {
        response.setEncoding('utf8');
        
        response.pipe(bl(function (err, data) {
            array[index] = data.toString();
            count++;

            if (count === 3)
                array.forEach(element => {
                    console.log(element);
                });
        }));
    });
}
```

STEP 10
```
var net = require('net');
var server = net.createServer(function (socket) {
    socket.end(getDate());
});

server.listen(process.argv[2]);

function getDate() {
    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    const minutes = date.getMinutes();
    let hours = date.getHours();

    return `${date.getFullYear()}-${
        month < 10 ? `0${month}` : month}-${
        day < 10 ? `0${day}` : day} ${
            hours < 10 ? ((hours === 0) ? '12' : `0${hours}`) : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}\n`
}
```

STEP 11


- 스트림 : 배열이나 문자열같은 데이터 컬렉션
- createReadStream : 읽기 가능한 스트림을 제공
- req : 요청에서 header나 query string 같은 속성을 가져옴
- res : 클라이언트로 header와 body data를 보냄

```
var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var fileDir = process.argv[3];

var server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(fileDir);
    stream.pipe(res);
});

server.listen(port);
```


STEP 12
```
var http = require('http');
var map = require('through2-map'); // 스트림 데이터 변환에 사용
 
var port = process.argv[2];

function upcase(upcase) {
    return chunk.toString().toUpperCase();
}

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });

    // request와 response는 스트리밍 기능이 있다.
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);
```


STEP 13
```
var http = require('http');
var url = require('url');
 
var port = process.argv[2];

function upcase(upcase) {
    return chunk.toString().toUpperCase();
}

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'application/json' });

    const url_data = url.parse(req.url, true);
    const date = new Date(url_data.query.iso);
    var result = '';
    
    if (url_data.pathname === "/api/parsetime") {
        var result = { 
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
         };
    } else if (url_data.pathname === "/api/unixtime") {
        result = { 
            'unixtime': date.getTime()
         };
    }

    res.end(JSON.stringify(result));
});

server.listen(port);
```