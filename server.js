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
	  "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/tiktok.svg"
        },
        {
            "site": "Dailymotion",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/dailymotion.svg"
	},
        {
            "site": "Likee",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/likee.svg"
        },
        {
            "site": "Moj",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/moj.svg"
        },
        {
            "site": "Vimeo",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/vimeo.svg"
        },
        {
            "site": "9GAG",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/9gag.svg"
        },
        {
            "site": "Akilli TV",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/akillitv.svg"
        },
        {
            "site": "Bandcamp",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/bandcamp.svg"
        },
        {
            "site": "Bilibili",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/bilibili.svg"
        },
        {
            "site": "Bitchute",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/bitchute.svg"
        },
        {
            "site": "Blogger",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/blogger.svg"
        },
        {
            "site": "BluTV",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/blutv.svg"
        },
        {
            "site": "Buzzfeed",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/buzzfeed.svg"
        },
        {
            "site": "Capcut",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/capcut.svg"
        },
        {
            "site": "Chingari",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/chingari.svg"
        },
        {
            "site": "Douyin",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/douyin.svg"
        },
        {
            "site": "ESPN",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/espn.svg"
        },
        {
            "site": "Facebook",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/facebook.svg"
        },
        {
            "site": "Febspot",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/febspot.svg"
        },
        {
            "site": "Flickr",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/flickr.svg"
        },
        {
            "site": "Ifunny",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/ifunny.svg"
        },
        {
            "site": "IMDB",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/imdb.svg"
        },
        {
            "site": "Imgur",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/imgur.svg"
        },
        {
            "site": "Instagram",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/instagram.svg"
        },
        {
            "site": "Izlesene",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/izlesene.svg"
        },
        {
            "site": "Kwai",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/kwai.svg"
        },
        {
            "site": "Lemon8",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/lemon8.svg"
        },
        {
            "site": "LinkedIn",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/linkedin.svg"
        },
        {
            "site": "Loom",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/loom.svg"
        },
        {
            "site": "Mashable",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/mashable.svg"
        },
        {
            "site": "Mastodon",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/mastodon.svg"
        },
        {
            "site": "Mixcloud",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/mixcloud.svg"
        },
        {
            "site": "MxTakatak",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/mxtakatak.svg"
        },
        {
            "site": "Ok.ru",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/odnoklassniki.svg"
        },
        {
            "site": "Pinterest",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/pinterest.svg"
        },
        {
            "site": "PuhuTV",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/puhutv.svg"
        },
        {
            "site": "Reddit",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/reddit.svg"
        },
        {
            "site": "Rumble",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/rumble.svg"
        },
        {
            "site": "Share Chat",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/sharechat.svg"
        },
        {
            "site": "Snapchat",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/snapchat.svg"
        },
        {
            "site": "Soundcloud",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/soundcloud.svg"
        },
        {
            "site": "Streamable",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/streamable.svg"
        },
        {
            "site": "Substack",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/substack.svg"
        },
        {
            "site": "TED",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/ted.svg"
        },
        {
            "site": "Telegram",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/telegram.svg"
        },
        {
            "site": "Threads",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/threads.svg"
        },
        {
            "site": "Tumblr",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/tumblr.svg"
        },
        {
            "site": "Twitch",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/twitch.svg"
        },
        {
            "site": "VK",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/vk.svg"
        },
        {
            "site": "YouTube",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/youtube.svg"
        },
        {
            "site": "X",
	    "logourl": "https://videodownloaderapi.intlsite.com/wp-content/plugins/aio-video-downloader/assets/img/sources/x.svg"
        }
    ])
})
