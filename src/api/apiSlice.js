import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://law-deployment.vercel.app",
    tagTypes: ["profile", "orders", "invoice", "orderById"],
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // ////////////////////////////////////Authorization Api
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/user/login/",
        method: "POST",
        body: payload,
      }),
    }),
    signUpUser: builder.mutation({
      query: (payload) => ({
        url: "/user/signup/",
        method: "POST",
        body: payload,
      }),
    }),
    sendOtp: builder.mutation({
      query: (payload) => ({
        url: "/user/send-otp/",
        method: "POST",
        body: payload,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (payload) => ({
        url: "/user/verify-otp/",
        method: "POST",
        body: payload,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: "/user/reset-password/",
        method: "PUT",
        body: payload,
      }),
    }),
    ////////////////////////// Profile Management
    updateprofile: builder.mutation({
      query: (payload) => ({
        url: "/user/profile/",
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["profile"],
    }),
    getUser: builder.query({
      query: () => ({
        url: "/user/profile/",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    updatePassword: builder.mutation({
      query: (payload) => ({
        url: "/user/update-password/",
        method: "PUT",
        body: payload,
      }),
    }),
    /////////////////////////////////// Documentation

    uploadDocument: builder.mutation({
      query: (payload) => ({
        url: "/document/upload/",
        method: "POST",
        body: payload,
      }),
    }),
    translateDocument: builder.mutation({
      query: (id) => ({
        url: `/document/translate/?document_id=${id}`,
        method: "POST",
      }),
      invalidatesTags: ["orderById"],
    }),
    uploadTranslatedDocument: builder.mutation({
      query: (payload) => ({
        url: "/document/upload-translated/",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["order"],
    }),
    updateTranslatedText: builder.mutation({
      query: (payload) => ({
        url: "/document/update-translated-text/",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["orderById"],
    }),

    // /////////////////////////////orders////////////////
    getOrder: builder.query({
      query: (page) => ({
        url: `/order/list/?page=${page}`,
        method: "GET",
      }),

      providesTags: ["order"],
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `/order/list/?order_id=${id}`,
        method: "GET",
      }),
      providesTags: ["orderById"],
    }),
    createOrder: builder.mutation({
      query: (payload) => ({
        url: "/order/create/",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["order"],
    }),

    // /////////////////////////////payments////////////////
    paymentIntent: builder.mutation({
      query: (payload) => ({
        url: "/payment/create-intent/",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["invoice"],
    }),

    getInvoices: builder.query({
      query: (page) => ({
        url: `/payment/invoices/?page=${page}`,
        // url: `/payment/invoices/`,

        method: "GET",
      }),
      providesTags: ["invoice"],
    }),
    adminDashboard: builder.query({
      query: () => ({
        url: "/user/admin-dashboard",
        method: "GET",
      }),
      providesTags: ["invoice", "order", "orderById"],
    }),
  }),
});
