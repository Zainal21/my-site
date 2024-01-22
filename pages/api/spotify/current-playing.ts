import { getNowPlayling } from "@/libs/spotify";
import { SpotifyTrackArtist, SpotifyCurrentNowPlaying } from "@/types/spotify";
import { NextApiRequest, NextApiResponse } from "next";

type HandlerResponseCurrentPlaying = {
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  isPlaying: boolean;
  songUrl?: string;
  title?: string;
  id?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponseCurrentPlaying>
) => {
  if (req.method === "GET") {
    try {
      const song: SpotifyCurrentNowPlaying = await getNowPlayling();
      const isPlaying = song.is_playing;
      const title = song.item.name;
      const artist = song.item.artists
        ?.map((_artist: SpotifyTrackArtist) => _artist.name)
        .join(", ");
      const album = song.item.album.name;
      const albumImageUrl = song.item.album.images[0].url;
      const songUrl = song.item.external_urls.spotify;
      const id = song.item.id;

      return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
        id,
      });
    } catch (err) {
      return res.status(200).json({ isPlaying: false });
    }
  }
};

export default handler;
