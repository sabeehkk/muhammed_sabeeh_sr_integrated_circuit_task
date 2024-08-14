import React from "react";
import { FaCloudSunRain } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { GiWhirlwind } from "react-icons/gi";

const WeatherData = ({ weatherData, showWidget }) => {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <>
      {showWidget && weatherData && (
        <div className="mt-8 bg-[#fbfbfb] text-[#292e34] rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Weather:{" "}
            <span className="weather-location">{weatherData.name}</span>
          </h2>
          <div className="overflow-x-auto whitespace-nowrap space-x-8 flex items-center">
            <div className="inline-block">
              <p className="text-gray-600">
                <span className="font-bold">Temperature</span>
                <span className="inline-block align-middle text-4xl">
                  <FaCloudSunRain />
                </span>
              </p>
              <p className="text-4xl font-bold mt-2 weather-temp">
                {weatherData.main.temp}°C
              </p>
              <p className="text-gray-600">{formattedDate}</p>
            </div>
            <div className="inline-block">
              <p className="text-gray-600">
                <span className="font-bold">Humidity</span>
                <span className="inline-block align-middle text-4xl">
                  <WiHumidity />
                </span>
              </p>
              <p className="text-4xl font-bold mt-2 humidity-percent">
                {weatherData.main.humidity}%
              </p>
              <p className="text-gray-600">{formattedDate}</p>
            </div>
            <div className="inline-block">
              <p className="text-gray-600">
                <span className="font-bold">Wind Speed</span>
                <span className="inline-block align-middle text-4xl">
                  <GiWhirlwind />
                </span>
              </p>
              <p className="text-4xl font-bold mt-2 wind-speed">
                {weatherData.wind.speed} km/h
              </p>
              <p className="text-gray-600">{formattedDate}</p>
            </div>
            <div className="inline-block">
              <p className="text-gray-600">
                <span className="font-bold">Feels Like</span>
              </p>
              <p className="text-2xl font-semibold mt-2">
                {weatherData.main.feels_like}°C
              </p>
            </div>
            <div className="inline-block">
              <p className="text-gray-600">
                <span className="font-bold">Pressure</span>
              </p>
              <p className="text-2xl font-semibold mt-2">
                {weatherData.main.pressure} hPa
              </p>
            </div>
            <div className="inline-block">
              <p className="text-gray-600">
                <span className="font-bold">Visibility</span>
              </p>
              <p className="text-2xl font-semibold mt-2">
                {weatherData.visibility / 1000} km
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherData;
