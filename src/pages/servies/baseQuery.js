import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = () =>
  fetchBaseQuery({
    baseUrl: "http://45.64.156.213:9696/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
