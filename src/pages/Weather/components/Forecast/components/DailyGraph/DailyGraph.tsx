import { SingleForecastResult } from "api/useWeather/types";
import { useMemo } from "react";
import {
  Area,
  AreaChart,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { withUnit } from "utils/units";
import UnitLabel from "./components/UnitLabel";
import { forecastsAsGraphRepresentsTemperature } from "./utils";

interface Props {
  forecasts: SingleForecastResult[];
}

const CHART_COLOR_MAIN = "#FFCC00";
const CHART_COLOR_GRADIENT = "#4D431D";
function DailyGraph({ forecasts }: Props) {
  const data = useMemo(
    () => forecastsAsGraphRepresentsTemperature(forecasts),
    [forecasts]
  );

  return (
    <ResponsiveContainer width="100%" height={250}>
      {data.length ? (
        <AreaChart data={data} margin={{ left: 30, right: 30 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={CHART_COLOR_GRADIENT}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={CHART_COLOR_GRADIENT}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis type="category" dataKey="name" tick={{ fill: "#c9c9c9" }} />
          <YAxis
            type="number"
            dataKey="temperature"
            domain={["dataMin - 5", "dataMax + 5"]}
            hide
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#2B2B2B" }}
            labelStyle={{ color: "#c9c9c9" }}
            formatter={(f) => [
              withUnit(Number(f), "temperature") ?? "-",
              "Temperatura",
            ]}
          />
          <Area
            animationDuration={500}
            type="monotone"
            dataKey="temperature"
            stroke={CHART_COLOR_MAIN}
            fillOpacity={1}
            fill="url(#colorUv)"
            dot
            label={<UnitLabel />}
          />
        </AreaChart>
      ) : (
        <></>
      )}
    </ResponsiveContainer>
  );
}
export default DailyGraph;
