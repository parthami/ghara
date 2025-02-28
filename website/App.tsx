import {getWeather} from "./panels/weather.ts";
import {useEffect, useState} from "react";

const App = () => {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  const [weatherText, setWeatherText] = useState("");

  useEffect(() => {
      getWeather().then(weather =>
      setWeatherText(weather.daily.weatherDescription.description)
      )
  }, []);

  return (
    <div>
        <div className="h-screen grid grid-cols-2 grid-rows-2 gap-4">
            <div className="bg-gray-200 flex">
                <span className="m-auto text-9xl">{time}</span>
            </div>
            <div className="bg-gray-300 flex">
                <span className="m-auto text-6xl">{weatherText}</span>
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
