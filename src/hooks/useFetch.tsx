import { useState } from "react";
import { FetchProps } from "./types/FetchProps";
import { FetchStatusProps } from "./types/FetchStateProps";

const useFetch = <T extends RequestInit | undefined>({
  url,
  options,
}: FetchProps<T>) => {
  const [status, setStatus] = useState<FetchStatusProps>({
    isLoading: false,
    data: [],
    error: null,
  });

  async function fetchNow() {
    setStatus((prevStatus) => ({ ...prevStatus, isLoading: true }));

    const response = await fetch(url, options);
    try {
      if (!response.ok) {
        throw new Error(`Error fetch ${response.statusText}`);
      }

      const result = response.status === 204 ? null : await response.json();

      setStatus((prevStatus) => ({
        ...prevStatus,
        data: result,
        isLoading: false,
        error: null,
      }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setStatus((prevStatus) => ({
        ...prevStatus,
        isLoading: false,
        error: error,
      }));
    } finally {
      setStatus((prevStatus) => ({ ...prevStatus, isLoading: false }));
    }
  }

  return { ...status, fetchNow };
};

export default useFetch;
