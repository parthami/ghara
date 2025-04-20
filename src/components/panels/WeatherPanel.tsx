"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { WeatherHourlyData } from "../../fetchers/weather.ts";

type WeatherPanelProps = {
  weatherPanelData: WeatherHourlyData[];
};

const WeatherPanel = ({ weatherPanelData }: WeatherPanelProps) => (
  <div className="border-2 border-dashed border-gray-800 flex flex-col">
    <LineChart
      width={392}
      height={232}
      data={weatherPanelData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="4 1 2" />
      <XAxis dataKey="hour" />
      <YAxis width={10} />

      <Line
        type="monotone"
        dataKey="temperature"
        stroke="black"
        activeDot={{ r: 8 }}
        isAnimationActive={false}
      />
    </LineChart>
  </div>
);

export default WeatherPanel;
