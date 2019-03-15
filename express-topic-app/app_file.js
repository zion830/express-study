var express = require('express');
var body_parser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(body_parser.urlencoded({extended: false}));
app.locals.pretty = true;

app.set('views', './views_file');
app.set('view engine', 'pug');

app.get('/topic/new', function (req, res) {
    res.render('new');
});

// params로 넘어온 파일 내용을 읽어서 전달해주는 기능 구현
app.get(['/', '/topic', '/topic/:title'], function (req, res) {
    var title = req.params.title;

    if (title) {
        // id 값이 있을 때
        fs.readFile('data/' + title, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                res.status(500).send('Server Error!');
            }
            res.render('check', {title: title, content: data});
        });
    } else {
        // id 값이 없을 때
        fs.readdir('data', function (err, files) {
            if (err) {
                console.log(err);
                res.status(500).send('Server Error');
            }
            res.render('show', {topics: files});
        });
    }
});

app.post('/topic', function (req, res) {
    var title = req.body.title;
    var content = req.body.content;
    fs.writeFile('data/' + title, content, 'utf8', function (err) {
        if (err) {
            console.log(err);
            res.status(500).send('Server Error');
        }
        res.redirect('/topic');
    });
});

app.listen(3000, function () {
    console.log('3000번 포트에 연결');
});