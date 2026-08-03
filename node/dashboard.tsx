import type React from "react";
import type { WeatherHourlyData } from "./weather";

interface DashboardProps {
	weatherData: WeatherHourlyData[];
}

const Dashboard: React.FC<DashboardProps> = ({ weatherData }) => {
	const formattedWeather = (weather: WeatherHourlyData) => {
		return (
			<div tw="flex flex-col mr-8">
				<div tw="flex mb-4 text-4xl">{weather.temperature.toFixed(1)}°C</div>
				<div tw="flex text-3xl">{weather.hour}:00</div>
			</div>
		);
	};

	return (
		<div tw="flex h-full w-full items-center justify-center bg-white">
			{weatherData.map((weather, index) => formattedWeather(weather))}
		</div>
	);
};

export default Dashboard;
