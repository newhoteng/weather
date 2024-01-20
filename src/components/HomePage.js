import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import HomePageNav from './HomePageNav';
import { cities } from '../data/cities';
// import axios from 'axios';
import { getWeatherData } from '../redux/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
// import FetchedWeather from './FetchedWeather';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [fetchedData, setFetchedData] = useState(null);

  const { weatherData } = useSelector((store) => store.weather);
  const dispatch = useDispatch();

  let forecastDate = ''

  if (weatherData) {
    const dateString = weatherData.location.localtime.split(' ')[0]
    const currentDate = new Date(dateString);
             
    // Instantiate another object (based on the current), so we won't mutate the currentDate object
    let yesterday = new Date(currentDate)
    yesterday?.setDate(yesterday.getDate() - 1)
    forecastDate = yesterday?.toISOString().split('T')[0]
    console.log(forecastDate)
  }

          
  // console.log(formattedDate)
  // console.log(yesterday.toISOString().split('T')[0])

  // const currentDate = new Date().toDateString();

  // const sampleData = {
  //   "request": {
  //       "type": "City",
  //       "query": "Brisbane, Australia",
  //       "language": "en",
  //       "unit": "m"
  //   },
  //   "location": {
  //       "name": "Brisbane",
  //       "country": "Australia",
  //       "region": "Queensland",
  //       "lat": "-27.500",
  //       "lon": "153.017",
  //       "timezone_id": "Australia/Brisbane",
  //       "localtime": "2024-01-19 04:17",
  //       "localtime_epoch": 1705637820,
  //       "utc_offset": "10.0"
  //   },
  //   "current": {
  //       "observation_time": "06:17 PM",
  //       "temperature": 23,
  //       "weather_code": 116,
  //       "weather_icons": [
  //           "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
  //       ],
  //       "weather_descriptions": [
  //           "Partly cloudy"
  //       ],
  //       "wind_speed": 6,
  //       "wind_degree": 210,
  //       "wind_dir": "SSW",
  //       "pressure": 1005,
  //       "precip": 0,
  //       "humidity": 94,
  //       "cloudcover": 75,
  //       "feelslike": 25,
  //       "uv_index": 1,
  //       "visibility": 10,
  //       "is_day": "no"
  //   },
  //   "forecast": {
  //       "2024-01-18": {
  //           "date": "2024-01-18",
  //           "date_epoch": 1705536000,
  //           "astro": {
  //               "sunrise": "05:09 AM",
  //               "sunset": "06:47 PM",
  //               "moonrise": "12:01 PM",
  //               "moonset": "11:30 PM",
  //               "moon_phase": "First Quarter",
  //               "moon_illumination": 48
  //           },
  //           "mintemp": 23,
  //           "maxtemp": 34,
  //           "avgtemp": 27,
  //           "totalsnow": 0,
  //           "sunhour": 11,
  //           "uv_index": 11
  //       }
  //   }
  // }

  const matched = cities.filter((city) => city.name.toLowerCase().includes(searchTerm.trim().toLowerCase())).slice(0, 5);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const city = matched[0];
    dispatch(getWeatherData(city.name));
    console.log(city.name)
    // console.log(weatherData);
  }

  const handleClick = (e) => {
    console.log(matched);
  }

  return (
    <main className=''>
      <HomePageNav />
      <div className='bg-plane h-[400px] bg-cover py-[30px] relative'>
        <div className='bg-black/65 max-w-screen-xl mx-auto p-[50px]'>
          <form onSubmit={handleSumbit} className='bg-white flex'>
            <input
              name='searchTerm'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search for a place'
              type='text'
              className='outline-none w-full px-[24px] py-[8px]'
            />
            <button
                type='submit'
                className='basis-1/12 flex items-center justify-center'
              >
                <IoMdSearch className='text-gray-600 text-[32px]' />
              </button>
          </form>
          {searchTerm.trim().length !== 0 && (
            <div className='text-gray-600 bg-white mt-2 z-10 relative'>
              {matched.map((city, index) => (
                <div
                  id={index}
                  key={index}
                  onClick={handleClick}
                  className='border p-2 cursor-pointer'
                >
                  {city.name}{' '}({city.cou_name_en})
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <FetchedWeather /> */}
        {(weatherData && forecastDate !== '') && (
          <div className='border absolute bottom-0 bg-white flex p-5 w-[400px]'>
            <div className='border-r pr-4 w-1/2'>
              <h5 className='text-xl'>Today ({weatherData.location?.name})</h5>
              <div className='flex items-center gap-2'>
                <p className='p-1 text-lg'>{weatherData.forecast?.[forecastDate].maxtemp}&#176;</p>
                <p className='p-1 text-gray-500'>{weatherData.forecast?.[forecastDate].mintemp}&deg;</p>
              </div>
              <div className='flex justify-between pt-3'>
                <div>
                  <h6 className='font-semibold'>Sunrise:</h6>
                  <p>{weatherData.forecast?.[forecastDate].astro?.sunrise}</p>
                </div>
                <div>
                  <h6 className='font-semibold'>Sunset:</h6>
                  <p>{weatherData.forecast?.[forecastDate].astro?.sunset}</p>
                </div>
              </div>
            </div>
            <div className='px-4 flex flex-col justify-between'>
              <h5 className='text-gray-500 text-sm'>{weatherData.current.weather_descriptions[0]}</h5>
              <div className='flex items-center justify-center gap-2'>
                <p className='flex items-center justify-center font-semibold'>UV index:</p>
                <p>{weatherData.forecast?.[forecastDate].uv_index}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default HomePage