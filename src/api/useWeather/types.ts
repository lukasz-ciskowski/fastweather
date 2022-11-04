export interface WeatherData {
  currentWeather: CurrentWeatherResponse;
  forecast: ForecastResponse;
}

export interface CurrentWeatherResponse {
  coord: { lon: number; lat: number };
  weather: WeatherResult[];
  base: string;
  main: MainResult;
  visibility: number;
  wind: WindResult;
  clouds?: { all: number };
  rain?: { "1h": number; "3h": number };
  snow?: { "1h": number; "3h": number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: SingleForecastResult[];
}

export type GeocodingResponse = Array<{
  name: string;
  lat: number;
  lon: number;
  country: string;
}>;

export interface SingleForecastResult {
  dt: number;
  dt_txt: string;
  visibility: number;
  main: MainResult & {
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
  };
  weather: WeatherResult[];
  clouds?: CloudsResult;
  wind?: WindResult;
  rain?: { "3h": number };
  snow?: { "3h": number };
  pop: number;
  sys: {
    pod: string;
  };
}

interface MainResult {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface WeatherResult {
  id: number;
  main: "Clear" | "Clouds" | "Rain";
  description: string;
  icon: string;
}
interface CloudsResult {
  all: number;
}
interface WindResult {
  speed: number;
  deg: number;
  gust?: number;
}
