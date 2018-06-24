# Terminal based weather app using node js

Simple weather application that uses OpenWeatherMap API to fetch weather of a city passed as paramter.

#### Setup:

  - Sign up for openweathermap.com
  - Click on API keys tab, and create a key.


### Execution

```sh
$ node index.js -c cityName -a apiKey
```
>cityName is a variable.
>apiKey is your unique API from openweathermap.com

#### Sample Request
```sh
$ node index.js -c Bangalore -a 4b2bfeba10ea2d4864a221a2********
```

#### Output
>It's 24.53 degrees in Bangalore!