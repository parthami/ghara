import type React from "react";
import type { WeatherHourlyData } from "./weather";

interface DashboardProps {
	weatherData: WeatherHourlyData[];
}

const Dashboard: React.FC<DashboardProps> = ({ weatherData }) => {
	const formattedWeather = (weather: WeatherHourlyData) => {
		return (
			<div tw="flex flex-col w-1/4 items-center justify-center text-center" key={weather.hour}>
				<div tw="flex text-3xl">{weather.hour}</div>
				<div tw="flex my-8">(icon)</div>
				<div tw="flex text-4xl font-bold">{Math.round(weather.temperature)}°</div>
			</div>
		);
	};

	return (
		<div tw="flex h-full w-full items-center justify-center bg-white">
			<div tw="flex w-3/4 items-center justify-center bg-gray-200 p-16 rounded-32">
			{weatherData.map((weather, index) => formattedWeather(weather))}
			</div>
		</div>
	);
};

export default Dashboard;
