import { weatherAxios } from "api/weatherAxios";
import { currentWeather, forecast } from "./mock";
import { CurrentWeatherResponse, ForecastResponse, GeocodingResponse } from "./types";

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

export async function getForecast(lat: number, lon: number): Promise<ForecastResponse> {
  // const { data } = await weatherAxios.get("/data/2.5/forecast", {
  //   params: { lat, lon, units: "metric", lang: "pl" },
  // });
  // return data;
  return forecast;
}

export async function queryCityGeocoding(q: string): Promise<GeocodingResponse> {
  const { data } = await weatherAxios.get("/geo/1.0/direct", {
    params: { q, limit: 1 },
  });

  return data;
}
