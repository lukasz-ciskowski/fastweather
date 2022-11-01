import { useWeather } from "api/useWeather/useWeather";
import { useMemo, useState } from "react";
import DailyGraph from "./components/DailyGraph/DailyGraph";
import ForecastTabItem from "./components/ForecastTabItem/ForecastTabItem";
import "./styles.scss";
import { getDailyForecastSummary } from "./utils";

function Forecast() {
  const { data } = useWeather();
  const currentWeather = data?.forecast;
  const [selectedForecastDay, setSelectedForecastDay] = useState<number>(0);

  const dailyForecastSummary = useMemo(() => {
    if (!currentWeather) return [];
    const forecastSummary = getDailyForecastSummary(currentWeather.list);

    // select first day by default
    setSelectedForecastDay(forecastSummary[0].day);
    return forecastSummary;
  }, [currentWeather]);

  const forecastsForSelectedDay = useMemo(
    () => dailyForecastSummary.find((d) => d.day === selectedForecastDay)?.data ?? [],
    [dailyForecastSummary, selectedForecastDay]
  );

  const handleSelect = (day: number) => setSelectedForecastDay(day);

  return (
    <div className="forecast">
      <div className="forecast__tabs">
        {dailyForecastSummary.map((tabItem) => (
          <ForecastTabItem
            item={tabItem}
            key={tabItem.day}
            selected={selectedForecastDay === tabItem.day}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <DailyGraph forecasts={forecastsForSelectedDay} />
    </div>
  );
}
export default Forecast;
