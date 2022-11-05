import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import RainGraph from "./components/RainGraph/RainGraph";
import WidgetMaps from "./components/WidgetMaps/WidgetMaps";
import { useSetupWeather } from "./hooks/useSetupWeather";
import "./styles.scss";

function Weather() {
  const { onInsertCity, citySearchStatus, status } = useSetupWeather();

  return (
    <div className="weather">
      {status === "ready" && <div className="weather__background" />}
      <Header
        onSearch={onInsertCity}
        isLoading={citySearchStatus === "loading"}
      />
      {status === "loading" && (
        <div className="weather__loading">
          <i className="fa-solid fa-cloud-sun" />
        </div>
      )}
      {status === "error" && (
        <main className="weather__error">
          <section>
            <i className="fa-solid fa-triangle-exclamation" />
            <h1>Nie udało się pobrać danych o pogodzie</h1>
          </section>
        </main>
      )}
      {status === "ready" && (
        <main className="weather__content">
          <section style={{ gridArea: "weather" }}>
            <CurrentWeather />
          </section>
          <section style={{ gridArea: "forecast" }}>
            <Forecast />
          </section>
          <section style={{ gridArea: "temp-map" }}>
            <WidgetMaps />
          </section>
          <section style={{ gridArea: "info" }}>
            <Info />
          </section>
          <section style={{ gridArea: "rain" }}>
            <RainGraph />
          </section>
        </main>
      )}
    </div>
  );
}
export default Weather;
