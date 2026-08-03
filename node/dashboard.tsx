import type React from "react";
import type { WeatherHourlyData } from "./weather";

interface DashboardProps {
	weatherData: WeatherHourlyData[];
}

const Dashboard: React.FC<DashboardProps> = ({ weatherData }) => {
	return (
		<div
			style={{
				backgroundColor: "white",
				display: "flex",
				height: "100%",
				width: "100%",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{ color: "black", display: "flex" }}
			>{`hello, world!! ${weatherData.map((data) => `(${data.hour} - ${data.temperature.toFixed(1)})`).join(", ")}`}</div>
		</div>
	);
};

export default Dashboard;
