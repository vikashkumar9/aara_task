import { API, API_KEYS } from "./api";

export const postApi = API.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (payload) => {
        return {
          url: `/${API_KEYS.BED_MANAGEMENT}`,
          method: "GET",
          params: payload,
        };
      },
      providesTags: [API_KEYS.BED_MANAGEMENT],
    }),
  }),
});

export const { useGetPostQuery } = postApi;
