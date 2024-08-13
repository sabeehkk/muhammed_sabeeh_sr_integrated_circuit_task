

import './App.css';
import { useState } from 'react';
import { TbSearch } from "react-icons/tb";
import { GiWhirlwind } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { FaCloudSunRain } from "react-icons/fa6";
import '../src/components/weather_style.css';

function App() {
  let api_key = '56f54a7afc223c83f785e49750741896';
  const [showWidget, setShowWidget] = useState(false); 
  const [weatherData, setWeatherData] = useState(null); 
  console.log(weatherData,'weather');
  
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  const search = async () => {
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
  
  return (
    <div className="bg-[#fcd469] min-h-screen flex p-4 sm:p-8 md:p-12 lg:p-14 xl:p-16">
      <div className="w-full max-w-4xl mx-auto p-4">
        
        <header className="flex justify-between items-center header">
          <h1 className="text-4xl font-bold text-[#fbfbfb]">
            FRANK<span className="text-[#000000]">LARC</span>
          </h1>
          <input type="text" className='cityInput' placeholder='Check weather' />
          <TbSearch className='search_icon' onClick={search} />
          <nav className="space-x-8">
            <a href="#tools" className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]">Shop</a>
            <a href="#pricing" className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]">Pages</a>
            <a href="#support" className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]">Categor</a>
            <button className="bg-gray-50 text-[#000000] font-semibold border-none border-[#435933] rounded-full px-4 py-1 hover:bg-gray-100  transition">Signup</button>
          </nav>
        </header>

        {/* Conditionally rendering  weather things */}
        {showWidget && weatherData && (
          <div className="mt-8 bg-[#fbfbfb] text-[#292e34] rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Weather : <span className='weather-location'>{weatherData.name}</span></h2>
            <div className="overflow-x-auto whitespace-nowrap space-x-8 flex items-center">           
            <div className="inline-block">
                  <p className="text-gray-600"><span className='font-bold'>Temperature</span><span className="inline-block align-middle text-4xl"><FaCloudSunRain/></span></p>
                  <p className="text-4xl font-bold mt-2 weather-temp">{weatherData.main.temp}°C</p>
                  <p className="text-gray-600">{formattedDate}</p>
                </div>
              
                <div className="inline-block">
                  <p className="text-gray-600"><span className='font-bold'>Humidity</span><span className="inline-block align-middle text-4xl"><WiHumidity/></span></p>
                  <p className="text-4xl font-bold mt-2 humidity-percent">{weatherData.main.humidity}%</p>
                  <p className="text-gray-600">{formattedDate}</p>
                </div>

                <div className="inline-block">
                  <p className="text-gray-600"><span className='font-bold'>Wind Speed</span><span className="inline-block align-middle text-4xl"><GiWhirlwind/></span></p>
                  <p className="text-4xl font-bold mt-2 wind-speed">{weatherData.wind.speed} km/h</p>
                  <p className="text-gray-600">{formattedDate}</p>
                </div>

                <div className="inline-block">
                  <p className="text-gray-600"><span className='font-bold'>Feels Like</span></p>
                  <p className="text-2xl font-semibold mt-2">{weatherData.main.feels_like}°C</p>
                </div>
                <div className="inline-block">
                  <p className="text-gray-600"><span className='font-bold'>Pressure</span></p>
                  <p className="text-2xl font-semibold mt-2">{weatherData.main.pressure} hPa</p>
                </div>

                <div className="inline-block">
                  <p className="text-gray-600"><span className='font-bold'>Visibility</span></p>
                  <p className="text-2xl font-semibold mt-2">{weatherData.visibility / 1000} km</p>
                </div>
            </div>
          </div>
        )}

        <main className="pt-36 bg-[#fcd469] rounded-lg flex items-center">
          <div>
            <h2 className="text-4xl font-bold text-black">
              <span className="block">Lorem ipsum dolor, sit amet</span>
              <span className="block">consec adipiscing elit.</span>
            </h2>
            <p className="mt-4 text-gray-800 text-opacity-50">
              <span className='block'>Nam euismod orci in felis bibendum, at scelerisque libero pretium letter,</span>
              <span className='block'>  vel pretium, est condimentum, Morbi</span>
            </p>
            <div className='mt-20'>
              <button className="bg-[#292e34] hover:bg-[#000000] text-white rounded-full px-16 py-5 transition">
                Bestsellers list
              </button>
            </div>
          </div>
          <div className="ml-8">
            {/* <img src="" alt="Product" className="h-40 object-cover"/> */}
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
