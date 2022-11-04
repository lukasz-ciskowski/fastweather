import { useWeather } from "api/useWeather/useWeather";
import { useEffect } from "react";

const DEFAULT_POS = {
  lat: 52.237049,
  lon: 21.017532,
};

export function useSetupWeather() {
  const { fetchWeather, fetchCityGeocoding, citySearchStatus, status } = useWeather();

  useEffect(() => {
    fetchWeather(
      Number(localStorage.getItem("user_lat")) || DEFAULT_POS.lat,
      Number(localStorage.getItem("user_lon")) || DEFAULT_POS.lon
    );
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      fetchWeather(lat, long);
    });
  }, []);

  const handleInsertCity = (cityQ: string) => fetchCityGeocoding(cityQ);

  return {
    status,
    onInsertCity: handleInsertCity,
    citySearchStatus
  };
}
