import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchContacts = createAsyncThunk(
  'contacts/current',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const tokenStorage = state.auth.token;

    token.set(tokenStorage);
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      console.log(error)
    }
  }
);

const addContacts = createAsyncThunk('contacts/add', async ({ name, number }, thunkApi) => {
    const state = thunkApi.getState();
    const userToken = state.auth.token;
    
    token.set(userToken);

    try {
      const { data } = await axios.post('/contacts', {
        name,
        number,
      });
      
      return data;
    } catch (error) {
      console.log(error)
    }
  }
);

const deleteContacts = createAsyncThunk('contacts/delete', async (id, thunkApi) => {
    const state = thunkApi.getState();
    const userToken = state.auth.token;

    token.set(userToken);

    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      console.log(error)
    }
  }
);

const userUpdate = createAsyncThunk('contacts/update', async ({ id, name, number }, thunkApi) => {
    const state = thunkApi.getState();
    const updateTpken = state.auth.token;
    token.set(updateTpken);
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      console.log(error)
    }
  }
);

const filterName = createAction('contacts/filterName');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContacts,
  deleteContacts,
  filterName,
  fetchContacts,
  userUpdate,
};