import { useWeather } from "api/useWeather/useWeather";
import { useEffect } from "react";

const DEFAULT_POS = {
  lat: 52.237049,
  long: 21.017532,
};

export function useSetupWeather() {
  const { fetchWeather } = useWeather();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      
      fetchWeather(lat, long)
    });
  }, []);
}
