var Twitter = require('twitter');
var WHOA = require('./DefineAParadigm');
var generator = new WHOA();

var client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

client.post('statuses/update', {status: generator.getNewInsight() }, function(error, tweet, response) {
  
  if (!error) {
    console.log(tweet);
  }
  console.log(response);
});