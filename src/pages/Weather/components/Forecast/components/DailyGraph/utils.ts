import { SingleForecastResult, WeatherResult } from "api/useWeather/types";
import { DateTime } from "luxon";

export function forecastsAsGraphRepresentsTemperature(
  forecasts: SingleForecastResult[]
) {
  return forecasts.map((f) => ({
    name: DateTime.fromSeconds(f.dt, {}).toUTC().toLocaleString(DateTime.TIME_24_SIMPLE),
    temperature: Number(f.main.temp.toFixed(0)),
  }));
}
