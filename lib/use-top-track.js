import useSWR from "swr";
import fetch from "./fetch";

export function useSpotifyTopTracks() {
  const { data, error } = useSWR("/api/spotify/top-tracks", fetch);
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
