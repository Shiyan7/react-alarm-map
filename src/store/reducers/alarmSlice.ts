import { createSlice } from "@reduxjs/toolkit";
import { IRegion } from "../../types/IRegion";

interface IState {
    alarmRegions: IRegion[]
}

const initialState: IState = {
    alarmRegions: []
}

export const alarmSlice = createSlice({
    name: 'alarmSlice',
    initialState,
    reducers: {
        setAlarmRegion: (state, action) => {
            state.alarmRegions = [...state.alarmRegions, action.payload]
        },
        removeAlarmRegion: (state, action) => {
            state.alarmRegions.filter(region => region.id !== action.payload)
        }
    }
})

export const {
    setAlarmRegion,
    removeAlarmRegion,
} = alarmSlice.actions

export default alarmSlice.reducer