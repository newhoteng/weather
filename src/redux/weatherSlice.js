import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  weatherData: null,
  isLoading: false,
  error: undefined,
};

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async (city, thunkAPI) => {
  try {
    // const resp = await axios(`http://api.weatherstack.com/forecast?access_key=dc3318240c4b7a68c82957200c08652a&query=${city}`)
    const resp = await axios(`http://api.weatherstack.com/forecast?access_key=dc3318240c4b7a68c82957200c08652a&query=Accra`)
    const { data } = resp;

    console.log(data);

    if ('success' in data) {
      return
    }

    // const dateString = data.location?.localtime.split(' ')[0]
    // const currentDate = new Date(dateString);
             
    // Instantiate another object (based on the current), so we won't mutate the currentDate object
    // let yesterday = new Date(currentDate)
    // yesterday.setDate(yesterday.getDate() - 1)
    // const formattedDate = yesterday.toISOString().split('T')[0]
    // console.log(formattedDate)

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // getWeatherData
    builder.addCase(getWeatherData.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getWeatherData.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      weatherData: action.payload,
    }));
    builder.addCase(getWeatherData.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }));
  },
});

// export const { addBook, removeBook } = booksSlice.actions;
export default weatherSlice.reducer;