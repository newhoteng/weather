import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import HomePageNav from './HomePageNav';
import { cities } from '../data/cities';
import { getWeatherData } from '../redux/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayDiv, setDisplayDiv] = useState(false);

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
  }

  const matched = cities.filter((city) => city.name.toLowerCase().includes(searchTerm.trim().toLowerCase())).slice(0, 5);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const city = matched[0];
    setSearchTerm(`${city.name}(${city.cou_name_en})`);
    dispatch(getWeatherData(city.name));
    document.getElementById("search").blur();
    console.log(city.name)
  }

  const handleClick = (e) => {
    setSearchTerm(e.target.id)
    dispatch(getWeatherData(e.target.id));
    document.getElementById("search").blur();
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
              onFocus={() => setDisplayDiv(true)}
              onBlur={() => setDisplayDiv(false)}
              placeholder='Search for a place'
              type='text'
              className='outline-none w-full px-[24px] py-[8px]'
              id='search'
            />
            <button
                type='submit'
                className='basis-1/12 flex items-center justify-center'
              >
                <IoMdSearch className='text-gray-600 text-[32px]' />
              </button>
          </form>
          {(searchTerm.trim().length !== 0 && displayDiv) && (
            <div className='text-gray-600 bg-white mt-2 z-10 relative'>
              {matched.map((city, index) => (
                <div
                  id={`${city.name} (${city.cou_name_en})`}
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
        {(weatherData && forecastDate !== '') && (
          <div className='border absolute bottom-0 bg-white flex p-5 w-[400px]'>
            <div className='border-r pr-4 min-w-[50%]'>
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