import { getNowPlayling } from "@/libs/sportify";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "GET") {
    try {
      const song = await getNowPlayling();
      console.log("song =>>" + song);
      const isPlaying = song.is_playing;
      const title = song.item.name;
      const artist = song.item.artists
        .map((_artist: any) => _artist.name)
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
      return res.status(200).json({ isPlaying: false});
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
