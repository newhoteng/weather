import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FetchedWeather = () => {
  const { weatherData, isLoading, error } = useSelector((store) => store.weather);
  // const dispatch = useDispatch()

  if (isLoading) {
    return (
      <div className='border absolute bottom-0 bg-white flex p-5 w-[400px]'>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className='border absolute bottom-0 bg-white flex p-5 w-[400px]'>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  // if (weatherData)
  return (
    // {weatherData && (
    <div className='border absolute bottom-0 bg-white flex p-5 w-[400px]'>
      <div className='border-r pr-4 w-1/2'>
        <h5 className='text-xl'>Today</h5>
        <div className='flex items-center gap-2'>
          <p className='p-1 text-lg'>{weatherData?.current?.temperature}&#176;</p>
          <p className='p-1 text-gray-500'>3&deg;</p>
        </div>
        <div className='flex justify-between pt-3'>
          <div>
            <h6 className='font-semibold'>Sunrise:</h6>
            <p>08:20</p>
          </div>
          <div>
            <h6 className='font-semibold'>Sunset:</h6>
            <p>16:14</p>
          </div>
        </div>
      </div>
      <div className='px-4 flex flex-col justify-between'>
        <h5 className='text-gray-500 text-sm'>Clear</h5>
        <div className='flex items-center justify-center gap-2'>
          <p className='border border-black w-6 h-6 flex items-center justify-center bg-yellow-300'>M</p>
          <p>UV</p>
        </div>
      </div>
    </div>
    // )}
  )
}

export default FetchedWeather