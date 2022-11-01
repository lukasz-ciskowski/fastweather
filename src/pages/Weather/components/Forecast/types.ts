import { SingleForecastResult, WeatherResult } from "api/useWeather/types";

export interface ForecastForDaily {
  day: number;
  temp: number;
  data: SingleForecastResult[]
  weather: WeatherResult[];
}
