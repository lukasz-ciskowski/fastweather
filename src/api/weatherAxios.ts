import axios from "axios";

export const weatherAxios = axios.create({
  baseURL: "https://api.openweathermap.org",
});

weatherAxios.interceptors.request.use((config) => {
  config.params = { ...config.params, appid: process.env.OPEN_WEATHER_API_KEY };
  return config;
});
