import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  weatherData: {},
  isLoading: false,
  error: undefined,
};

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async (city, thunkAPI) => {
  try {
    const resp = await axios(`http://api.weatherstack.com/forecast?access_key=dc3318240c4b7a68c82957200c08652a&query=${city}`);
    const { data } = resp;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});
