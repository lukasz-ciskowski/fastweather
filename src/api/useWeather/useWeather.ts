import create from "zustand";
import { CurrentWeatherResponse, WeatherData } from "./types";
import {
  getCurrentWeather,
  getForecast,
  queryCityGeocoding,
} from "./weatherApi";

interface WeatherState {
  data: WeatherData | null;
  lat: number | null;
  lon: number | null;
  status: "loading" | "ready" | "error" | null;
  citySearchStatus: "loading" | null;
  fetchWeather: (lat: number, long: number) => void;
  fetchCityGeocoding: (q: string) => void;
}

export const useWeather = create<WeatherState>((set, get) => ({
  data: null,
  lat: null,
  lon: null,
  status: null,
  citySearchStatus: null,
  fetchWeather: async (lat: number, lon: number) => {
    try {
      // if data is already there do not make any action
      if (get().lat === lat && get().lon === lon) return;

      set({ status: "loading" });
      localStorage.setItem("user_lat", lat.toString());
      localStorage.setItem("user_lon", lon.toString());

      const [currentWeather, forecast] = await Promise.all([
        getCurrentWeather(lat, lon),
        getForecast(lat, lon),
      ]);
      set({
        status: "ready",
        data: { currentWeather, forecast },
        lat,
        lon: lon,
      });
    } catch (error) {
      set({ status: "error" });
    }
  },
  fetchCityGeocoding: async (q: string) => {
    try {
      set({ citySearchStatus: "loading" });

      const [city] = await queryCityGeocoding(q);
      if (city) get().fetchWeather(city.lat, city.lon);
    } catch (error) {
      set({ status: "error" });
    }

    set({ citySearchStatus: null });
  },
}));
