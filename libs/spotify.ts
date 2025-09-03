import qs from "query-string";
import fetch from "./fetch";
import { SpotifyTopTracks } from "@/types/spotify";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
    return response;
  } catch (error) {
    return { access_token: undefined };
  }
}

export async function getPlaylist() {
  const { access_token } = await getAccessToken();

  const response = await fetch(PLAYLIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const { items }: SpotifyTopTracks = await response;

  return items?.map((track) => ({
    albumImageUrl: track.album.images[0].url,
    artist: track.artists?.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
    id: track.id,
  }));
}

export async function getNowPlayling() {
  const { access_token } = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response;
}
