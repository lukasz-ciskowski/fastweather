import { useWeather } from "api/useWeather/useWeather";
import { withUnit } from "utils/units";
import "./styles.scss";

function CurrentWeather() {
  const { data } = useWeather();
  const currentWeather = data?.currentWeather;

  return (
    <div className="current-weather">
      <div className="current-weather__city">{currentWeather?.name}</div>
      <div className="current-weather__main">
        {withUnit(currentWeather?.main.temp.toFixed(0), "temperature")}
      </div>
      <div className="current-weather__description">
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}.png`}
          alt="weather-icon"
          width={50}
          height={50}
        />
        <span>{currentWeather?.weather[0].description}</span>
      </div>
      <div className="current-weather__info">
        <div
          className="current-weather__info__readout"
          title="Temperatura maksymalna"
        >
          <i className="fas fa-arrow-up" />
          {withUnit(currentWeather?.main.temp_max.toFixed(1), "temperature")}
        </div>
        <div
          className="current-weather__info__readout"
          title="Temperatura minimalna"
        >
          <i className="fas fa-arrow-down" />
          {withUnit(currentWeather?.main.temp_min.toFixed(1), "temperature")}
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
