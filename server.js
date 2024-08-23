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
	  "logourl": "https://lumensoft.site/sources/tiktok.png"
        },
        {
            "site": "Dailymotion",
	    "logourl": "https://lumensoft.site/sources/dailymotion.png"
	},
        {
            "site": "Likee",
	    "logourl": "https://lumensoft.site/sources/likee.png"
        },
        {
            "site": "Moj",
	    "logourl": "https://lumensoft.site/sources/moj.png"
        },
        {
            "site": "Vimeo",
	    "logourl": "https://lumensoft.site/sources/vimeo.png"
        },
        {
            "site": "9GAG",
	    "logourl": "https://lumensoft.site/sources/gag.png"
        },
        {
            "site": "Akilli TV",
	    "logourl": "https://lumensoft.site/sources/akillitv.png"
        },
        {
            "site": "Bandcamp",
	    "logourl": "https://lumensoft.site/sources/bandcamp.png"
        },
        {
            "site": "Bilibili",
	    "logourl": "https://lumensoft.site/sources/bilibili.png"
        },
        {
            "site": "Bitchute",
	    "logourl": "https://lumensoft.site/sources/bitchute.png"
        },
        {
            "site": "Blogger",
	    "logourl": "https://lumensoft.site/sources/blogger.png"
        },
        {
            "site": "BluTV",
	    "logourl": "https://lumensoft.site/sources/blutv.png"
        },
        {
            "site": "Buzzfeed",
	    "logourl": "https://lumensoft.site/sources/buzzfeed.png"
        },
        {
            "site": "Capcut",
	    "logourl": "https://lumensoft.site/sources/capcut.png"
        },
        {
            "site": "Chingari",
	    "logourl": "https://lumensoft.site/sources/chingari.png"
        },
        {
            "site": "Douyin",
	    "logourl": "https://lumensoft.site/sources/douyin.png"
        },
        {
            "site": "ESPN",
	    "logourl": "https://lumensoft.site/sources/espn.png"
        },
        {
            "site": "Facebook",
	    "logourl": "https://lumensoft.site/sources/facebook.png"
        },
        {
            "site": "Febspot",
	    "logourl": "https://lumensoft.site/sources/febspot.png"
        },
        {
            "site": "Flickr",
	    "logourl": "https://lumensoft.site/sources/flickr.png"
        },
        {
            "site": "Ifunny",
	    "logourl": "https://lumensoft.site/sources/ifunny.png"
        },
        {
            "site": "IMDB",
	    "logourl": "https://lumensoft.site/sources/imdb.png"
        },
        {
            "site": "Imgur",
	    "logourl": "https://lumensoft.site/sources/imgur.png"
        },
        {
            "site": "Instagram",
	    "logourl": "https://lumensoft.site/sources/instagram.png"
        },
        {
            "site": "Izlesene",
	    "logourl": "https://lumensoft.site/sources/izlesene.png"
        },
        {
            "site": "Kwai",
	    "logourl": "https://lumensoft.site/sources/kwai.png"
        },
        {
            "site": "Lemon8",
	    "logourl": "https://lumensoft.site/sources/lemon8.png"
        },
        {
            "site": "LinkedIn",
	    "logourl": "https://lumensoft.site/sources/linkedin.png"
        },
        {
            "site": "Loom",
	    "logourl": "https://lumensoft.site/sources/loom.png"
        },
        {
            "site": "Mashable",
	    "logourl": "https://lumensoft.site/sources/mashable.png"
        },
        {
            "site": "Mastodon",
	    "logourl": "https://lumensoft.site/sources/mastodon.png"
        },
        {
            "site": "Mixcloud",
	    "logourl": "https://lumensoft.site/sources/mixcloud.png"
        },
        {
            "site": "MxTakatak",
	    "logourl": "https://lumensoft.site/sources/mxtakatak.png"
        },
        {
            "site": "Ok.ru",
	    "logourl": "https://lumensoft.site/sources/odnoklassniki.png"
        },
        {
            "site": "Pinterest",
	    "logourl": "https://lumensoft.site/sources/pinterest.png"
        },
        {
            "site": "PuhuTV",
	    "logourl": "https://lumensoft.site/sources/puhutv.png"
        },
        {
            "site": "Reddit",
	    "logourl": "https://lumensoft.site/sources/reddit.png"
        },
        {
            "site": "Rumble",
	    "logourl": "https://lumensoft.site/sources/rumble.png"
        },
        {
            "site": "Share Chat",
	    "logourl": "https://lumensoft.site/sources/sharechat.png"
        },
        {
            "site": "Snapchat",
	    "logourl": "https://lumensoft.site/sources/snapchat.png"
        },
        {
            "site": "Soundcloud",
	    "logourl": "https://lumensoft.site/sources/soundcloud.png"
        },
        {
            "site": "Streamable",
	    "logourl": "https://lumensoft.site/sources/streamable.png"
        },
        {
            "site": "Substack",
	    "logourl": "https://lumensoft.site/sources/substack.png"
        },
        {
            "site": "TED",
	    "logourl": "https://lumensoft.site/sources/ted.png"
        },
        {
            "site": "Telegram",
	    "logourl": "https://lumensoft.site/sources/telegram.png"
        },
        {
            "site": "Threads",
	    "logourl": "https://lumensoft.site/sources/threads.png"
        },
        {
            "site": "Tumblr",
	    "logourl": "https://lumensoft.site/sources/tumblr.png"
        },
        {
            "site": "Twitch",
	    "logourl": "https://lumensoft.site/sources/twitch.png"
        },
        {
            "site": "VK",
	    "logourl": "https://lumensoft.site/sources/vkontakte.png"
        },
        {
            "site": "YouTube",
	    "logourl": "https://lumensoft.site/sources/youtube.png"
        },
        {
            "site": "X",
	    "logourl": "https://lumensoft.site/sources/x.png"
        }
    ])
})
