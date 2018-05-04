require("dotenv").config();

var keys = require("./keys.js");
var fs = require('fs');
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var a = process.argv[2];
var b = process.argv[3];


//Twitter machine
//make it so that that my-tweets is [2]
//need to also think for spotify later on, becasue that is going to use [2] as well
switch(a) {

    case 'my-tweets':

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      });

      var params = {screen_name: 'NigelSchumacher', count: 20};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (let i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            };
        };
      });

    };
