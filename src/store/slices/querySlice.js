import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDark: false,
  isLoading: false,
  error: null,
  results: null,
  history: [],
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    addToHistory: (state, action) => {
      state.history.unshift(action.payload);
    },
    removeFromHistory: (state, action) => {
      state.history = state.history.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  toggleDarkMode,
  setLoading,
  setError,
  setResults,
  addToHistory,
  removeFromHistory,
} = querySlice.actions;

export default querySlice.reducer;