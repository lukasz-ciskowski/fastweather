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
    const userLocation = WeatherCache.userLocation;
    if (userLocation) {
      fetchWeather(userLocation.lat, userLocation.lon);
      return;
    } else {
      fetchWeather(DEFAULT_POS.lat, DEFAULT_POS.lon, true);
    }

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
