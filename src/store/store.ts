import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { alarmAPI } from "../services/AlarmService";
import alarmReducer from './reducers/alarmSlice'
import menuReducer from './reducers/menuSlice'

const rootReducer = combineReducers({
    alarmReducer,
    menuReducer,
    [alarmAPI.reducerPath]: alarmAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(alarmAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']