import { Settings } from "luxon";
import Weather from "pages/Weather/Weather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./api/weatherAxios"

// luxon setting
Settings.defaultLocale = "pl"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
