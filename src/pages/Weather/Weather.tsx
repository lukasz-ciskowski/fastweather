import SearchInput from "ui/SearchInput/SearchInput";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Info from "./components/Info/Info";
import RainGraph from "./components/RainGraph/RainGraph";
import WidgetMaps from "./components/WidgetMaps/WidgetMaps";
import { useSetupWeather } from "./hooks/useSetupWeather";
import "./styles.scss";

function Weather() {
  useSetupWeather();

  return (
    <div className="weather">
      <div className="weather__background" />
      <header className="weather__header">
        <div className="weather__header__logo">
          <img src="/public/img/logo.png" alt="logo" />
        </div>
        <div className="weather__header__search">
          <SearchInput placeholder="Wpisz miasto" onSubmit={() => {}} />
        </div>
      </header>
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
    </div>
  );
}
export default Weather;
