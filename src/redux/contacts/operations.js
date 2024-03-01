import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchall', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (er) {
    return thunkAPI.rejectWithValue(er.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (values, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', values);
    return response.data;
  } catch (er) {
    return thunkAPI.rejectWithValue(er.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      return response.data;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);
