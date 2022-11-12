import { useWeather } from "api/useWeather/useWeather";
import React, { useState } from "react";
import TabItem from "ui/TabItem/TabItem";
import { OpenWeatherMapTypes } from "ui/WeatherMap/types";
import WeatherMap from "ui/WeatherMap/WeatherMap";
import "./styles.scss";

const MAP_TYPES: [OpenWeatherMapTypes, React.ReactNode][] = [
  [
    "temp_new",
    <span key="temp-new" className="widget-maps__tabs__item">
      <i className="fa-solid fa-temperature-quarter"></i>Temperatura
    </span>,
  ],
  [
    "clouds_new",
    <span key="clouds-new" className="widget-maps__tabs__item">
      <i className="fa-solid fa-cloud"></i>Zachmurzenie
    </span>,
  ],
  [
    "wind_new",
    <span key="wind-new" className="widget-maps__tabs__item">
      <i className="fa-solid fa-wind"></i>Wiatr
    </span>,
  ],
];
function WidgetMaps() {
  const { lat, lon } = useWeather();
  const [selectedMap, setSelectedMap] =
    useState<OpenWeatherMapTypes>("temp_new");

  const handleSelectMap = (type: OpenWeatherMapTypes) => () =>
    setSelectedMap(type);

  if (!lat || !lon) return <></>;
  return (
    <div className="widget-maps">
      <div className="widget-maps__tabs">
        {MAP_TYPES.map(([type, render]) => (
          <TabItem
            key={type}
            selected={type === selectedMap}
            onClick={handleSelectMap(type)}
          >
            {render}
          </TabItem>
        ))}
      </div>
      <WeatherMap lat={lat} lon={lon} type={selectedMap} zoom={4} />
    </div>
  );
}
export default WidgetMaps;
