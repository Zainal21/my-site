import useSWR from "swr";
import fetch from "./fetch";

export function useCurrentlyPlaying({ refreshInterval = 10000 } = {}) {
  const { data, error } = useSWR("/api/spotify/currently-playing", fetch, {
    refreshInterval,
  });

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
