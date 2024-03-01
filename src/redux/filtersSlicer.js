import { createSlice } from '@reduxjs/toolkit';

const filtersSLice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload.toLowerCase();
    },
  },
});

export const { filterContact } = filtersSLice.actions;
export const filtersReducer = filtersSLice.reducer;
