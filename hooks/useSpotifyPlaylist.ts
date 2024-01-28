import useSWR from "swr";
import fetch from "@/libs/fetch";

export function useSpotifyPlaylist() {
  const { data, error } = useSWR("/api/spotify/playlist", fetch);
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
