import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../utils/consts'

export const alarmAPI = createApi({
    reducerPath: 'alarmAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        fetchAlarmMap: build.query({
            query: () => ({
                url: `/states`,
                headers: {
                    'X-API-Key': 'cfc9ed5cfa5a7ab0dd10fb73e82d3a701a7b1256'
                }
            })
        }),
    })
})


export const { useFetchAlarmMapQuery } = alarmAPI