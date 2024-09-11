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
	  "logourl": "https://videodownloaderapi.intlsite.com/sources/tiktok.png"
        },
        {
            "site": "Dailymotion",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/dailymotion.png"
	},
        {
            "site": "Likee",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/likee.png"
        },
        {
            "site": "Moj",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/moj.png"
        },
        {
            "site": "Vimeo",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/vimeo.png"
        },
        {
            "site": "9GAG",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/gag.png"
        },
        {
            "site": "Akilli TV",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/akillitv.png"
        },
        {
            "site": "Bandcamp",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/bandcamp.png"
        },
        {
            "site": "Bilibili",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/bilibili.png"
        },
        {
            "site": "Bitchute",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/bitchute.png"
        },
        {
            "site": "Blogger",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/blogger.png"
        },
        {
            "site": "BluTV",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/blutv.png"
        },
        {
            "site": "Buzzfeed",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/buzzfeed.png"
        },
        {
            "site": "Capcut",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/capcut.png"
        },
        {
            "site": "Chingari",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/chingari.png"
        },
        {
            "site": "Douyin",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/douyin.png"
        },
        {
            "site": "ESPN",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/espn.png"
        },
        {
            "site": "Facebook",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/facebook.png"
        },
        {
            "site": "Febspot",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/febspot.png"
        },
        {
            "site": "Flickr",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/flickr.png"
        },
        {
            "site": "Ifunny",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/ifunny.png"
        },
        {
            "site": "IMDB",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/imdb.png"
        },
        {
            "site": "Imgur",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/imgur.png"
        },
        {
            "site": "Instagram",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/instagram.png"
        },
        {
            "site": "Izlesene",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/izlesene.png"
        },
        {
            "site": "Kwai",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/kwai.png"
        },
        {
            "site": "Lemon8",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/lemon8.png"
        },
        {
            "site": "LinkedIn",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/linkedin.png"
        },
        {
            "site": "Loom",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/loom.png"
        },
        {
            "site": "Mashable",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/mashable.png"
        },
        {
            "site": "Mastodon",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/mastodon.png"
        },
        {
            "site": "Mixcloud",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/mixcloud.png"
        },
        {
            "site": "MxTakatak",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/mxtakatak.png"
        },
        {
            "site": "Ok.ru",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/odnoklassniki.png"
        },
        {
            "site": "Pinterest",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/pinterest.png"
        },
        {
            "site": "PuhuTV",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/puhutv.png"
        },
        {
            "site": "Reddit",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/reddit.png"
        },
        {
            "site": "Rumble",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/rumble.png"
        },
        {
            "site": "Share Chat",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/sharechat.png"
        },
        {
            "site": "Snapchat",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/snapchat.png"
        },
        {
            "site": "Soundcloud",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/soundcloud.png"
        },
        {
            "site": "Streamable",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/streamable.png"
        },
        {
            "site": "Substack",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/substack.png"
        },
        {
            "site": "TED",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/ted.png"
        },
        {
            "site": "Telegram",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/telegram.png"
        },
        {
            "site": "Threads",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/threads.png"
        },
        {
            "site": "Tumblr",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/tumblr.png"
        },
        {
            "site": "Twitch",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/twitch.png"
        },
        {
            "site": "VK",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/vkontakte.png"
        },
        {
            "site": "YouTube",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/youtube.png"
        },
        {
            "site": "X",
	    "logourl": "https://videodownloaderapi.intlsite.com/sources/x.png"
        }
    ])
})
