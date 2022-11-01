import { useWeather } from "api/useWeather/useWeather";
import Row from "ui/Row/Row";
import { withUnit } from "utils/units";
import "./styles.scss";

function Info() {
  const { data } = useWeather();

  return (
    <div className="info">
      <h4>
        <i className="fa-solid fa-circle-info"></i>Informacje pogodowe
      </h4>
      <Row
        label="Temp. odczuwalna"
        value={withUnit(
          data?.currentWeather.main.feels_like.toFixed(1),
          "temperature"
        )}
      />
      <Row
        label="Ciśnienie"
        value={withUnit(data?.currentWeather.main.pressure, "pressure")}
      />
      <Row
        label="Wilgotność"
        value={withUnit(data?.currentWeather.main.humidity, "percentage")}
      />
      <Row
        label="Prędkość wiatru"
        value={withUnit(data?.currentWeather.wind.speed, "speed")}
      />
      <Row
        label="Kierunek wiatru"
        value={withUnit(data?.currentWeather.wind.deg, "degree")}
      />
    </div>
  );
}
export default Info;
