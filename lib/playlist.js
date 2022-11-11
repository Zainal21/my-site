import useSWR from "swr";
import fetch from "./fetch";

export function useSpotifyPlaylist() {
  const { data, error } = useSWR("/api/spotify/playlist", fetch);
  console.log(">> data " + data);
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
