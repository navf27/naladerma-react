import useSWR from "swr";
import { fetchData } from "./axiosFetcher";

export const useGetData = (endpoint, headers) => {
  const { data, error } = useSWR(endpoint, () => fetchData(endpoint, headers));

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
