import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetHotelProfilePayload, GetHotelProfileResponse } from "./interface";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/uhotelzkk" }),
  endpoints: (builder) => ({
    getHotelProfile: builder.query<GetHotelProfileResponse, GetHotelProfilePayload>({
      query: (payload) => ({
        url: "/detail/_gethotelproductsbyredis",
        method: "POST",
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const { useGetHotelProfileQuery } = apiSlice;
