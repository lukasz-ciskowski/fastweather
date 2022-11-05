/* eslint-disable @typescript-eslint/no-unused-vars */
import { SingleForecastResult, WeatherResult } from "api/useWeather/types";
import { ForecastForDaily } from "./types";
import { DateTime } from "luxon";

type GroupedForecast = Omit<ForecastForDaily, "temp" | "data">;

// first arg is day
type ForecastsByWeekDay = Record<
  string,
  {
    temp_highest: number;
    data: SingleForecastResult[];
    weathers: Partial<Record<WeatherResult["main"], [number, GroupedForecast]>>;
  }
>;

/**
 * From 3hrs list of forecasts find most occurrence forecast type (clear/sunny etc) for each day
 */
export function getDailyForecastSummary(
  results: SingleForecastResult[]
): ForecastForDaily[] {
  const groupedByDay = getGroupedByWeekDays(results);

  return Object.entries(groupedByDay).reduce<ForecastForDaily[]>(
    (acc, [_, dayForecasts]) => {
      let highestWeatherPoints = 0;
      let mostOccurrenceForecast: ForecastForDaily | null = null;
      Object.entries(dayForecasts.weathers).forEach(
        ([_, [amount, forecast]]) => {
          if (amount > highestWeatherPoints) {
            mostOccurrenceForecast = {
              ...forecast,
              data: dayForecasts.data,
              temp: dayForecasts.temp_highest,
            };
            highestWeatherPoints = amount;
          }
        }
      );

      if (mostOccurrenceForecast) acc.push(mostOccurrenceForecast);
      return acc;
    },
    []
  );
}

function getGroupedByWeekDays(results: SingleForecastResult[]) {
  return results.reduce<ForecastsByWeekDay>((acc, curr) => {
    const date = DateTime.fromSeconds(curr.dt)
      .startOf("day")
      .toFormat("yyyy-MM-dd");

    if (!acc[date]) {
      acc[date] = { temp_highest: curr.main.temp, data: [], weathers: {} };
    }
    acc[date].data.push(curr);

    if (curr.main.temp > acc[date].temp_highest) {
      acc[date].temp_highest = curr.main.temp;
    }

    const currentWeatherMain = acc[date].weathers[curr.weather[0].main];
    if (!currentWeatherMain) {
      // element [0] means the amount of similar weather types
      acc[date].weathers[curr.weather[0].main] = [1, asForecastForDaily(curr)];
    } else {
      // increase amount of similar weather types
      currentWeatherMain[0] = currentWeatherMain[0] + 1;
    }

    return acc;
  }, {});
}

function asForecastForDaily(result: SingleForecastResult): GroupedForecast {
  return {
    day: DateTime.fromSeconds(result.dt).startOf("day").toSeconds(),
    weather: result.weather,
  };
}
