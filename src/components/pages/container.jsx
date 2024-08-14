import React, { useState } from 'react';
import Header from '../header';
import WeatherData from '../weather_data';
import MainBody from '../main_body';
import Sidebar from '../sideBar';

const Container = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [showWidget, setShowWidget] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const search = async () => {
    const api_key = '56f54a7afc223c83f785e49750741896';
    const element = document.getElementsByClassName("cityInput");
    let city = element[0].value.trim(); 
    if (city === "") {
      city = "Bangalore";
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === 200) {  
      setWeatherData(data);  
      setShowWidget(true);   
    } else {
      alert("City not found!");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#fcd469] min-h-screen flex p-4 sm:p-8 md:p-12 lg:p-14 xl:p-16">
      <div className="w-full max-w-4xl mx-auto p-4">
        <Header search={search} toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <WeatherData weatherData={weatherData} showWidget={showWidget} />
        <MainBody />
      </div>
    </div>
  );
}

export default Container;
