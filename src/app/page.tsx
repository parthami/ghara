import { getWeatherPanelData } from "../components/panels/weather.ts";
import Home from "../components/home.tsx";

export default async function Page() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes() === 0 ? "00" : currentTime.getMinutes()}`;
  const weatherPanelData = await getWeatherPanelData();

  return <Home time={time} weatherPanelData={weatherPanelData} />;
}
