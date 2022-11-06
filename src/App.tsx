import { Settings } from "luxon";
import Weather from "pages/Weather/Weather";
import "./api/weatherAxios";

// luxon setting
Settings.defaultLocale = "pl";

function App() {
  return <Weather />;
}
export default App;
