import { useWeather } from "api/useWeather/useWeather";
import { WeatherCache } from "api/useWeather/weatherCache";
import { useEffect } from "react";

const DEFAULT_POS = {
  lat: 52.237049,
  lon: 21.017532,
};

export function useSetupWeather() {
  const { fetchWeather, fetchCityGeocoding, citySearchStatus, status } =
    useWeather();

  useEffect(() => {
    fetchWeather(
      WeatherCache.lat || DEFAULT_POS.lat,
      WeatherCache.lon || DEFAULT_POS.lon
    );
  }, [fetchWeather]);

  useEffect(() => {
    if (WeatherCache.userLocation) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      fetchWeather(lat, long);
    });
  }, [fetchWeather]);

  const handleInsertCity = (cityQ: string) => fetchCityGeocoding(cityQ);

  return {
    status,
    onInsertCity: handleInsertCity,
    citySearchStatus,
  };
}
