import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "5616538b0cmshf0b195bbf48c865p1c89b3jsn9b6d2b3a2091",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: apiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`coins?limit=${count}`),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;
