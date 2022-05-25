import { configureStore, createSlice } from "@reduxjs/toolkit"
import { contactsApi } from "./contactsApi"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import authReducer from './auth-slice'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

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
        auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware
    ],
    devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)