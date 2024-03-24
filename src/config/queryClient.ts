import { QueryClient } from "react-query";
import { getRetryExpireToken } from "./getRetryExpireToken";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
      retry: getRetryExpireToken(),
      retryDelay: 3000,
      cacheTime: 0,
    },
  },
});
