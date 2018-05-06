require('dotenv').config();

var keys = require('./keys.js');
var fs = require('fs');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

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

    break;

    case 'spotify-this-song':

    function spotifySong (songTitle) {
        var spotify  = new Spotify({
            id: process.env.SPOTIFY_ID,
            secret: process.env.SPOTIFY_SECRET
        });

        spotify.search({ type: 'track', query: songTitle}, function(err, data) {
            if (err) {
                return console.log('Error occurred:' + err);
            }

            console.log('Artist: ' + data.tracks.items[0].artists.name);
            console.log('The Song\'s Name: ' + data.tracks.items[0].name);
            console.log('Album: ' + data.tracks.items[0].album.name);
            console.log('Artist\'s Profile: ' + data.tracks.items[0].external_urls.spotify);

        });
    }
    spotifySong(b);

    break;

    case 'movie-this':

    request('http://www.omdbapi.com/?apikey=trilogy&t=' + b +'  ', function (error, response, body) {
        console.log('Title: ' + JSON.parse(body).Title);
        console.log('Release Year: ' + JSON.parse(body).Year);
        console.log("IMDB's rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
        console.log('Country: ' + JSON.parse(body).Country);
        console.log('Language: ' + JSON.parse(body).Language);
        console.log('Plot: ' + JSON.parse(body).Plot);
        console.log('Actors: ' + JSON.parse(body).Actors);
    });

    break;

    case 'do-what-it-says':

    fs.readFile('random.txt', 'utf-8', function(error, data) {
        if (error) { return (error);
        }

        console.log(data);
        // need to take the text in random.txt and spit it out with the function I have in spotify-this-song
        
    });

    break;

}