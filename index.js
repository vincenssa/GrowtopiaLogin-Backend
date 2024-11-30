const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.json());

app.all('/player/login/dashboard', (req, res) => {

    res.sendFile(__dirname + '/public/html/dashboard.html');
});

app.all('/player/growid/login/validate', (req, res) => {
    // Extracting data from the request body
    const _token = req.body._token;
    const growId = "\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p\p;
    const password = "";

    const token = Buffer.from(
        `CgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg==`,
    ).toString('base64');

    res.send(
        `{"status":"success","message":"Account Validated.","token":"${growId}","url":"","accountType":"growtopia"}`,
    );
});

app.all('/player/validate/close', function (req, res) {
    res.send('<script>window.close();</script>');
});

app.all('/', (req, res) => {

    res.sendFile(__dirname + '/public/html/dashboard.html');
});

app.listen(5000, function () {
    console.log('Listening on port 5000');
});
