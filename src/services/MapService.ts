import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../utils/consts'

export const mapAPI = createApi({
    reducerPath: 'mapAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        fetchData: build.query({
            query: props => ({
                url: `/?before=${props}`,
            })
        }),
    })
})


export const { useFetchDataQuery } = mapAPI