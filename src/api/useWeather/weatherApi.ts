import { weatherAxios } from "api/weatherAxios";
import { currentWeather, forecast } from "./mock";
import { CurrentWeatherResponse } from "./types";

export async function getCurrentWeather(
  lat: number,
  lon: number
): Promise<CurrentWeatherResponse> {
  // const { data } = await weatherAxios.get("/data/2.5/weather", {
  //   params: { lat, lon, units: "metric", lang: "pl" },
  // });
  // return data;
  return currentWeather;
}

export async function getForecast(lat: number, lon: number) {
  // const { data } = await weatherAxios.get("/data/2.5/forecast", {
  //   params: { lat, lon, units: "metric", lang: "pl" },
  // });
  // return data;
  return forecast;
}