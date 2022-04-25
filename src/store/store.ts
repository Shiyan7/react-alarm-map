import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mapAPI } from "../services/MapService";

const rootReducer = combineReducers({
    [mapAPI.reducerPath]: mapAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mapAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']