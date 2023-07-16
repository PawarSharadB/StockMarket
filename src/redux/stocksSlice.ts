// stocksSlice.ts
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface Stock {
  id: string;
  name: string;
  symbol: string;
  price: number;
}

interface StocksState {
  data: Stock[];
  loading: boolean;
  error: string | null;
}

const initialState: StocksState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk to fetch stocks data from the API
export const fetchStocks = createAsyncThunk('stocks/fetchStocks', async () => {
  try {
    const response = await axios.get(
      'https://64b16133062767bc48262169.mockapi.io/api/v1/stocks',
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStocks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching stocks';
      });
  },
});

export default stocksSlice.reducer;
