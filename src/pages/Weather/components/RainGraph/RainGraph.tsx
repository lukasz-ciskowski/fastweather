import { useWeather } from "api/useWeather/useWeather";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { withUnit } from "utils/units";
import { forecastsAsRainVolume } from "./utils";
import "./styles.scss";

const CHART_COLOR_MAIN = "#4d87dd";
function RainGraph() {
  const { data } = useWeather();
  const graphData = useMemo(
    () => forecastsAsRainVolume(data?.forecast.list ?? []),
    [data?.forecast.list]
  );

  return (
    <div className="rain">
      <h4>Wysokość deszczu w ciągu 5 dni</h4>
      <ResponsiveContainer width="100%" height={250}>
        {graphData.length ? (
          <BarChart
            data={graphData}
            margin={{ left: 30, right: 30, bottom: 20 }}
          >
            <XAxis dataKey="name" tick={{ fill: "#c9c9c9" }} />
            <YAxis
              type="number"
              dataKey="rain"
              domain={["0", "dataMax + 5"]}
              hide
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#2B2B2B" }}
              labelStyle={{ color: "#c9c9c9" }}
              formatter={(f) => [
                withUnit(Number(f), "volume") ?? "",
                "Wysokość deszczu",
              ]}
            />
            <Bar
              animationDuration={500}
              type="monotone"
              dataKey="rain"
              fill={CHART_COLOR_MAIN}
              fillOpacity={0.4}
            />
          </BarChart>
        ) : (
          <></>
        )}
      </ResponsiveContainer>
    </div>
  );
}
export default RainGraph;
