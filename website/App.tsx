import { getWeatherPanelData } from "./panels/weather.ts";
import {useEffect, useState} from "react";

const App = () => {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  const [weatherPanelData, setWeatherPanelData] = useState({today: '', inFourHours: ''});

  useEffect(() => {
      getWeatherPanelData().then(weatherPanelData =>
      setWeatherPanelData(weatherPanelData)
      )
  }, []);

  return (
    <div>
        <div className="h-[480px] w-[800px] grid grid-cols-2 grid-rows-2 gap-4">
            <div className="bg-gray-200 flex">
                <span className="m-auto text-9xl">{time}</span>
            </div>
            <div className="bg-gray-300 flex flex-col">
                <span className="m-auto text-4xl">Today: {weatherPanelData.today}</span>
                <span className="m-auto text-4xl">In 4 hours: {weatherPanelData.inFourHours}</span>
            </div>
            <div className="bg-gray-300 flex">
                <span className="m-auto">Panel 3</span>
            </div>
            <div className="bg-gray-200 flex">
                <span className="m-auto">Panel 4</span>
            </div>
        </div>
    </div>
  )
};

export default App
