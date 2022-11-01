import { LayerGroup, MapContainer, TileLayer } from "react-leaflet";
import { OpenWeatherMapTypes } from "./types";

interface Props {
  lat: number;
  lon: number;
  type: OpenWeatherMapTypes;
  zoom?: number;
}

const ZOOM = 6;
function WeatherMap({ lat, lon, type, zoom = ZOOM }: Props) {
  const getWeatherUrl = (selectedType: OpenWeatherMapTypes) =>
    `https://tile.openweathermap.org/map/${selectedType}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_API_KEY}`;

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LayerGroup>
        {type === "temp_new" && <TileLayer url={getWeatherUrl("temp_new")} />}
        {type === "clouds_new" && <TileLayer url={getWeatherUrl("clouds_new")} />}
        {type === "wind_new" && <TileLayer url={getWeatherUrl("wind_new")} />}
      </LayerGroup>
    </MapContainer>
  );
}
export default WeatherMap;
