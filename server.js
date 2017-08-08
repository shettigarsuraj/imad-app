var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pageOne = {
    title: 'Page One | Suraj Shettigar',
    heading: 'GOT fan page',
    date: 'Aug 9 2017',
    content: `<p>
                This page is exclusively dedicated to GOT.<br/>
                This page will contain all the updates from GOT Season 7.<br/><br/>
                
                Stay tuned for latest updates and bloopers ;)
              </p>`
};

function createTemplate(data) {
    
    var date=data.date;
    var title=data.title
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate = `
        <HTML>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="Mystyle">
            <div>
               <a href='/'>Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${content}
            </div>
            </div>
        </body>
        </HTML>
    `;
    
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Page-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-one.html'));
});

app.get('/Page-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-two.html'));
});

app.get('/Page-three', function (req, res) {
  res.send(createTemplate(pageOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
