import qs from "query-string";
import fetch from "./fetch";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/me/playlists`;
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


export async function getPlaylist(range = "medium_term") {
  const { access_token } = await getAccessToken();
  const url = qs.stringifyUrl({
    url: PLAYLIST_ENDPOINT,
  });

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log("response :", response)

  return response;
}

export async function getNowPlayling() {
  const { access_token } = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log("response : ", response)

  return response;
}