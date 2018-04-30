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
(a === "my-tweets");
