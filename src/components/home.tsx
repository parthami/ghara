import WeatherPanel from "./panels/WeatherPanel.tsx";
import { WeatherHourlyData } from "../fetchers/weather.ts";
import { EventSchema } from "../fetchers/calendar.ts";
import CalendarPanel from "./panels/CalendarPanel.tsx";

type HomeProps = {
  time: string;
  weatherPanelData: WeatherHourlyData[];
  calenderData: EventSchema;
};

const Home = ({ time, weatherPanelData, calenderData }: HomeProps) => {
  return (
    <div>
      <div className="h-[480px] w-[800px] grid grid-cols-2 grid-rows-2 gap-4">
        <div className="border-2 border-dashed border-gray-800 flex">
          <span className="m-auto text-9xl">{time}</span>
        </div>
        <WeatherPanel weatherPanelData={weatherPanelData} />
        <CalendarPanel CalendarData={calenderData} />
        <div className="border-2 border-dashed border-gray-800 flex">
          <span className="m-auto">Panel 4</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
