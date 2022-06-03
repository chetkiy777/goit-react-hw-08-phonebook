import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-operations';

const items = createReducer([], {
  [actions.addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [actions.addContacts.rejected]: (state, _) => state,
  [actions.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [actions.fetchContacts.rejected]: (state, _) => state,
  [actions.deleteContacts.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
  [actions.deleteContacts.rejected]: (state, _) => state,
  [actions.userUpdate.fulfilled]: (state, { payload }) => [...state, payload],
  [actions.userUpdate.rejected]: (state, _) => state,
});

const filter = createReducer('', {
  [actions.filterName]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});