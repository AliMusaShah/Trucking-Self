import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://trucking-be.vercel.app/trucker/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: (pageSize, currentPage) => ({
        url: `/facility/all?pageSize=10&address=&page=${currentPage}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllFacilityQuery } = api;
