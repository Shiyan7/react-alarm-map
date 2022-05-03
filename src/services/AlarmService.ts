import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_KEY, API_URL } from '../utils/consts'

export const alarmAPI = createApi({
    reducerPath: 'alarmAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        fetchAlarmMap: build.query({
            query: () => ({
                url: `/states`,
                headers: {
                    'X-API-Key': API_KEY
                }
            })
        }),
    })
})


export const { useFetchAlarmMapQuery } = alarmAPI