import { SingleForecastResult } from "api/useWeather/types";
import { DateTime } from "luxon";

export function forecastsAsRainVolume(forecasts: SingleForecastResult[]) {
  return forecasts.map((forecast) => ({
    name: DateTime.fromSeconds(forecast.dt).toLocaleString({
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    }),
    rain: forecast.rain?.["3h"] ?? 0,
  }));
}
