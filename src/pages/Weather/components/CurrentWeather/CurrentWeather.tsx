import { useWeather } from "api/useWeather/useWeather";
import { withUnit } from "utils/units";
import "./styles.scss";

function CurrentWeather() {
  const { data } = useWeather();
  const currentWeather = data?.currentWeather;

  return (
    <div className="temperature">
      <div className="temperature__city">{currentWeather?.name}</div>
      <div className="temperature__main">
        {withUnit(currentWeather?.main.temp.toFixed(0), "temperature")}
      </div>
      <div className="temperature__description">
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}.png`}
          alt="weather-icon"
        />
        <span>{currentWeather?.weather[0].description}</span>
      </div>
      <div className="temperature__info">
        <div
          className="temperature__info__readout"
          title="Temperatura maksymalna"
        >
          <i className="fas fa-arrow-up" />
          {withUnit(currentWeather?.main.temp_max.toFixed(1), "temperature")}
        </div>
        <div
          className="temperature__info__readout"
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
