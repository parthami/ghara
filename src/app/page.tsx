import { getWeatherPanelData } from "../fetchers/weather.ts";
import Home from "../components/home.tsx";
import { getCalenderData } from "../fetchers/calendar.ts";

export default async function Page() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  const weatherPanelData = await getWeatherPanelData();
  const calenderData = await getCalenderData();

  return (
    <Home
      time={time}
      weatherPanelData={weatherPanelData}
      calenderData={calenderData}
    />
  );
}
