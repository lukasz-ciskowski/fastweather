import create from "zustand";
import { WeatherData } from "./types";
import {
  getCurrentWeather,
  getForecast,
  queryCityGeocoding,
} from "./weatherApi";
import { WeatherCache } from "./weatherCache";

interface WeatherState {
  data: WeatherData | null;
  lat: number | null;
  lon: number | null;
  status: "loading" | "ready" | "error" | null;
  citySearchStatus: "loading" | null;
  fetchWeather: (lat: number, long: number, noKeepData?: boolean) => void;
  fetchCityGeocoding: (q: string) => void;
}

export const useWeather = create<WeatherState>((set, get) => ({
  data: null,
  lat: null,
  lon: null,
  status: null,
  citySearchStatus: null,
  fetchWeather: async (lat: number, lon: number, noKeepData?: boolean) => {
    try {
      // if data is already there do not make any action
      if (get().lat === lat && get().lon === lon) return;

      set({ status: "loading" });
      if (!noKeepData) WeatherCache.updateUserLocation(lat, lon);

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
