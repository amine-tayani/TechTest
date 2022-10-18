import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchAutocompleteProps } from "@/types/index";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<SearchAutocompleteProps, void>({
      query: () => ({
        url: "?inc=name,picture&results=30",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
