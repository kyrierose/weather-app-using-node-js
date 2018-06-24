let request = require('request');
const argv = require('yargs').argv;
let apiKey = '4b2bfeba10ea2d4864a221a23021d3a2';
let city = argv.c || 'Jammu';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});