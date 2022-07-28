import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: "https://api-sa-east-1.hygraph.com/v2/cl60rt4rk43q401utej1j6onv/master",
//   headers: {
//   "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTkwMTAxMzMsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w2MHJ0NHJrNDNxNDAxdXRlajFqNm9udi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDg1MTE2OTgtNzg5Mi00ZTAxLTg0YTEtMjE5NTYxYzRlNWI0IiwianRpIjoiY2w2NHpzcmw3OG1razAxdDM3dzV6Z2RlMCJ9.dKZMNmshJhF000HNpShlkYLBxK_w9kxc_2pA-jYKXqeiPnoq60MPfnzX1q6PpuKrLYRmCFLosPG8Olb51-Mjhw_KYDu8swzcAjMsSGE3u04u-Wu-8TdDep0Ys5E1MXe6OQ1rSYvM6_Ei14n8U_bamOv6kncbPvNAQCaF0dqVAEpUYPfgS8AZZahcyCj0RGkh3Ery-3hXKD2_2o_rwjAm2KoFIU8JHApkscxDyo_b5yFj3wBjHCp-Z__OalPxddYbnmPTX3OfvqYq23y_pBWxWtmSTHj7YcTJL3Dcjr-2st2bfinLNcfIEdwm0jUt92OT4TJUznuRigLxBtCw1rHMY2winsl3gSMKODBI70meqQ9PNOMT163zoqqzY6RPvp-Xdtir2A1MUksbMVWRlKeMVY-9NqmnpMKdZZ36ZybEaVi0LRNWTqWJlXguEY56HAGoRjB_nslmbR7pEQbIINCSCy06li0U-xxs352cxYWQuQ9wP1c5YjBT63DopLqy1U65Hv4JrgcFWY3o-RnAtzH9bWs5lTlRmPH9HuIvV082ciUNQi4cNV6BLxlpUBtqdO6yzyXlf4kia3lSOdetMPOrWcGD7obEzpujIBZmI8tp6VsLf1pTFejL1OialVcR92an6E3MO0Sd3HxlOqaIRIc7MbAg6AeEv50L_W72NdviMuQ",
//   },
//   cache: new InMemoryCache(),
// });

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
