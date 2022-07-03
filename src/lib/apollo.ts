import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URI,
  headers: { 'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` },
  cache: new InMemoryCache(),
});

console.log(import.meta.env.VITE_API_URI, '-', import.meta.env.VITE_ACCESS_TOKEN)
