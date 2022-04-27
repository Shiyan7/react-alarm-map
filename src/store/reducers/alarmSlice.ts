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
        setAlarmRegions: (state, action) => {
            state.alarmRegions = action.payload
        },
    }
})

export const {
    setAlarmRegions
} = alarmSlice.actions

export default alarmSlice.reducer