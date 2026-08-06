import type React from "react";
import { CloverSvg } from "./clover";
import type { WeatherHourlyData } from "./weather";

interface DashboardProps {
	weatherData: WeatherHourlyData[];
}

const Dashboard: React.FC<DashboardProps> = ({ weatherData }) => {
	const [currentWeather, ...forecast] = weatherData;

	const formattedWeather = (weather: WeatherHourlyData, current = false) => {
		return (
			<div
				tw={`flex flex-col w-1/4 items-center justify-center text-center ${current ? "text-white" : "text-black"}`}
				key={weather.hour}
			>
				{!current && <div tw="flex text-3xl">{weather.hour}</div>}
				<div tw={`flex ${current ? "mb-8" : "my-8"}`}>-</div>
				<div tw="flex text-4xl font-bold">
					{Math.round(weather.temperature)}°
				</div>
			</div>
		);
	};

	return (
		<div tw="flex h-full w-full items-center justify-center bg-white">
			<div tw="flex w-5/6 items-center justify-center bg-gray-300 p-16 rounded-32">
				<div tw="flex bg-[#808080] items-center justify-center px-6 py-8 rounded-32">{formattedWeather(currentWeather, true)}</div>
				{forecast.map((weather) => formattedWeather(weather))}
			</div>
		</div>
	);
};

export default Dashboard;
