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
	  "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/tiktok.png"
        },
        {
            "site": "Dailymotion",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/dailymotion.png"
	},
        {
            "site": "Likee",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/likee.png"
        },
        {
            "site": "Moj",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/moj.png"
        },
        {
            "site": "Vimeo",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/vimeo.png"
        },
        {
            "site": "9GAG",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/9gag.png"
        },
        {
            "site": "Akilli TV",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/akillitv.png"
        },
        {
            "site": "Bandcamp",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/bandcamp.png"
        },
        {
            "site": "Bilibili",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/bilibili.png"
        },
        {
            "site": "Bitchute",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/bitchute.png"
        },
        {
            "site": "Blogger",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/blogger.png"
        },
        {
            "site": "BluTV",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/blutv.png"
        },
        {
            "site": "Buzzfeed",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/buzzfeed.png"
        },
        {
            "site": "Capcut",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/capcut.png"
        },
        {
            "site": "Chingari",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/chingari.png"
        },
        {
            "site": "Douyin",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/douyin.png"
        },
        {
            "site": "ESPN",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/espn.png"
        },
        {
            "site": "Facebook",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/facebook.png"
        },
        {
            "site": "Febspot",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/febspot.png"
        },
        {
            "site": "Flickr",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/flickr.png"
        },
        {
            "site": "Ifunny",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/ifunny.png"
        },
        {
            "site": "IMDB",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/imdb.png"
        },
        {
            "site": "Imgur",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/imgur.png"
        },
        {
            "site": "Instagram",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/instagram.png"
        },
        {
            "site": "Izlesene",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/izlesene.png"
        },
        {
            "site": "Kwai",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/kwai.png"
        },
        {
            "site": "Lemon8",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/lemon8.png"
        },
        {
            "site": "LinkedIn",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/linkedin.png"
        },
        {
            "site": "Loom",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/loom.png"
        },
        {
            "site": "Mashable",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/mashable.png"
        },
        {
            "site": "Mastodon",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/mastodon.png"
        },
        {
            "site": "Mixcloud",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/mixcloud.png"
        },
        {
            "site": "MxTakatak",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/mxtakatak.png"
        },
        {
            "site": "Ok.ru",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/odnoklassniki.png"
        },
        {
            "site": "Pinterest",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/pinterest.png"
        },
        {
            "site": "PuhuTV",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/puhutv.png"
        },
        {
            "site": "Reddit",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/reddit.png"
        },
        {
            "site": "Rumble",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/rumble.png"
        },
        {
            "site": "Share Chat",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/sharechat.png"
        },
        {
            "site": "Snapchat",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/snapchat.png"
        },
        {
            "site": "Soundcloud",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/soundcloud.png"
        },
        {
            "site": "Streamable",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/streamable.png"
        },
        {
            "site": "Substack",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/substack.png"
        },
        {
            "site": "TED",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/ted.png"
        },
        {
            "site": "Telegram",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/telegram.png"
        },
        {
            "site": "Threads",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/threads.png"
        },
        {
            "site": "Tumblr",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/tumblr.png"
        },
        {
            "site": "Twitch",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/twitch.png"
        },
        {
            "site": "VK",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/vk.png"
        },
        {
            "site": "YouTube",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/youtube.png"
        },
        {
            "site": "X",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/x.png"
        }
    ])
})
