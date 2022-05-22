import { configureStore, createSlice } from "@reduxjs/toolkit"
import { contactsApi } from "./contactsApi"

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        filter: ''
    },

    reducers: {
        setFilter(state, action) {
           return {...state, filter: action.payload }
        }
    }
})

export const {setFilter} = contactsSlice.actions;

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware
    ]
})
