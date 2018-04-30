require("dotenv").config();

var keys = require("./keys.js");
var fs = require('fs');
var request = require("request");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


