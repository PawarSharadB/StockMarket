// stocksSlice.ts
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from '../api';

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

export const fetchStocks = createAsyncThunk('stocks/fetchStocks', async () => {
  try {
    const response = await axios.get(`${API}/stocks`);
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
        state.data = action.payload; // Access action payload correctly
        state.error = null;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching stocks';
      });
  },
});

export default stocksSlice.reducer;
