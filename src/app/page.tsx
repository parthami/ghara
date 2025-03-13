import { getWeatherPanelData } from "../fetchers/weather.ts";
import Home from "../components/home.tsx";

export default async function Page() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  const weatherPanelData = await getWeatherPanelData();

  return <Home time={time} weatherPanelData={weatherPanelData} />;
}
