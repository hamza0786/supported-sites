const express = require('express'); // requre the express framework
const app = express();
const http = require('http');

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
	console.log('started on port ${port}');
});

app.get('/sites', function(req, res){
    res.json([
        {
          "site": "Tiktok",
          "logourl": "https://"
        },
        {
            "site": "Dailymotion",
            "logourl": "https://"
        },
        {
            "site": "Likee",
            "logourl": "https://"
        },
        {
            "site": "Moj",
            "logourl": "https://"
        },
        {
            "site": "Vimeo",
            "logourl": "https://"
        }
    ])
})