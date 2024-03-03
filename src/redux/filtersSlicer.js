import { createSlice } from '@reduxjs/toolkit';

const filtersSLice = createSlice({
  name: 'filters',
  initialState: {
    value: '',
  },
  reducers: {
    filterContact: (state, action) => {
      state.value = action.payload.toLowerCase();
    },
  },
});

export const { filterContact } = filtersSLice.actions;
export const filtersReducer = filtersSLice.reducer;
