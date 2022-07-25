import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl60rt4rk43q401utej1j6onv/master",
  cache: new InMemoryCache()
});
