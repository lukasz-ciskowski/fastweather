import { DateTime } from "luxon";
import TabItem from "ui/TabItem/TabItem";
import { withUnit } from "utils/units";
import { ForecastForDaily } from "../../types";
import "./styles.scss";

interface Props {
  item: ForecastForDaily;
  selected: boolean;
  onSelect: (day: number) => void;
}

function ForecastTabItem({ item, selected, onSelect }: Props) {
  const handleClick = () => onSelect(item.day);

  return (
    <TabItem selected={selected} onClick={handleClick}>
      <div className="forecast-tab-item">
        <span>
          {DateTime.fromSeconds(item.day).toLocaleString({ weekday: "short" })}
        </span>
        <img
          src={`http://openweathermap.org/img/wn/${item?.weather[0].icon}.png`}
          alt="weather-icon"
          width={50}
          height={50}
        />
        <span>{withUnit(item.temp.toFixed(0), "temperature")}</span>
      </div>
    </TabItem>
  );
}
export default ForecastTabItem;
