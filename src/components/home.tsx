"use client";

import WeatherPanel from "./panels/WeatherPanel.tsx";
import { WeatherHourlyData } from "../fetchers/weather.ts";

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
        <WeatherPanel weatherPanelData={weatherPanelData} />
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
