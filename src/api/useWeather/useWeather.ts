import create from "zustand";
import { CurrentWeatherResponse, WeatherData } from "./types";
import { getCurrentWeather, getForecast } from "./weatherApi";

interface WeatherState {
  data: WeatherData | null;
  lat: number | null;
  lon: number | null;
  status: "loading" | "ready" | "error" | null;
  fetchWeather: (lat: number, long: number) => void;
}

export const useWeather = create<WeatherState>((set) => ({
  data: null,
  lat: null,
  lon: null,
  status: null,
  fetchWeather: async (lat: number, long: number) => {
    try {
      set({ status: "loading" });

      const [currentWeather, forecast] = await Promise.all([
        getCurrentWeather(lat, long),
        getForecast(lat, long),
      ]);
      set({
        status: "ready",
        data: { currentWeather, forecast },
        lat,
        lon: long,
      });
    } catch (error) {
      set({ status: "error" });
    }
  },
}));
