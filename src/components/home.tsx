"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { WeatherHourlyData } from "./panels/weather.ts";

type HomeProps = {
  time: string;
  weatherPanelData: WeatherHourlyData[];
};

const Home = ({ time, weatherPanelData }: HomeProps) => {
  return (
    <div>
      <div className="h-[480px] w-[800px] grid grid-cols-2 grid-rows-2 gap-4">
        <div className="border-2 border-dashed border-gray-800 flex">
          <span className="m-auto text-9xl">{time}</span>
        </div>
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
            />
          </LineChart>
        </div>
        <div className="border-2 border-dashed border-gray-800 flex">
          <span className="m-auto">Panel 3</span>
        </div>
        <div className="border-2 border-dashed border-gray-800 flex">
          <span className="m-auto">Panel 4</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
