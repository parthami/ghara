import { fetchWeatherApi } from 'openmeteo';

const weatherCodes: { [key: number]: { description: string } } = {
    0: { description: "Clear sky" },
    1: { description: "Mainly clear" },
    2: { description: "Partly cloudy" },
    3: { description: "Overcast" },
    45: { description: "Fog" },
    48: { description: "Depositing rime fog" },
    51: { description: "Drizzle: Light intensity" },
    53: { description: "Drizzle: Moderate intensity" },
    55: { description: "Drizzle: Dense intensity" },
    56: { description: "Freezing Drizzle: Light intensity" },
    57: { description: "Freezing Drizzle: Dense intensity" },
    61: { description: "Rain: Slight intensity" },
    63: { description: "Rain: Moderate intensity" },
    65: { description: "Rain: Heavy intensity" },
    66: { description: "Freezing Rain: Light intensity" },
    67: { description: "Freezing Rain: Heavy intensity" },
    71: { description: "Snow fall: Slight intensity" },
    73: { description: "Snow fall: Moderate intensity" },
    75: { description: "Snow fall: Heavy intensity" },
    77: { description: "Snow grains" },
    80: { description: "Rain showers: Slight intensity" },
    81: { description: "Rain showers: Moderate intensity" },
    82: { description: "Rain showers: Violent intensity" },
    85: { description: "Snow showers: Slight intensity" },
    86: { description: "Snow showers: Heavy intensity" },
    95: { description: "Thunderstorm: Slight or moderate intensity" },
    96: { description: "Thunderstorm with slight hail" },
    99: { description: "Thunderstorm with heavy hail" },
};

export const getWeather = async () => {
    const params = {
        "latitude": 51.54499100807906,
        "longitude": -0.0200125821426322,
        "current": ["temperature_2m", "apparent_temperature", "weather_code"],
        "hourly": ["temperature_2m", "apparent_temperature", "weather_code"],
        "daily": "weather_code",
        "timezone": "Europe/London",
        "forecast_days": 1
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

// Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current()!;
    const hourly = response.hourly()!;
    const daily = response.daily()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {

        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0)!.value(),
            apparentTemperature: current.variables(1)!.value(),
            weatherCode: current.variables(2)!.value(),
        },
        hourly: {
            time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                (t) => new Date((t + utcOffsetSeconds) * 1000)
            ),
            temperature2m: hourly.variables(0)!.valuesArray()!,
            apparentTemperature: hourly.variables(1)!.valuesArray()!,
            weatherCode: hourly.variables(2)!.valuesArray()!,
        },

        daily: {
            time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                (t) => new Date((t + utcOffsetSeconds) * 1000)
            ),
            weatherCode: daily.variables(0)!.valuesArray()!,
            weatherDescription: weatherCodes[daily.variables(0)!.valuesArray()![0]],
        },

    };

    console.log(weatherData);

    return weatherData;
}