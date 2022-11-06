# ![alt text](./public/img/logo.png)

FastWeather is an application built with React for university project.

As many weather apps its main purpose is to check the current weather forecast.

[link to demo](https://lukasz-ciskowski.github.io/fastweather)

## Requirements

Since it was an university project some of the decisions were made according to the project specifications:

- Made with webpack
- Uses css preprocessor (Sass)

The application uses free openweather API

## Instalation

In order to run FastWeather locally you need to follow these steps:

### Install packages
If you are using yarn/npm follow this command

```
yarn / npm install
```

### Prepare environment

In your local filesystem rename the `.env.example` to `.env` and insert your generated API key in OPEN_WEATHER_API_KEY key.

The project was built on free version of openweather API, the only thing you need is to create an account and follow instruction steps to generate the key
Follow this [link](https://openweathermap.org/api) to access the token

### Running

Simply insert this command

```
npm start
```

to start the development version of an application
