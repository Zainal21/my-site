//  API route support: https://nextjs.org/docs/api-routes/introduction
import { getPlaylist } from "@/libs/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

type HandlerResponsePlaylist = {
  albumImageUrl?: string;
  artist?: string;
  isPlaying: boolean;
  songUrl?: string;
  title?: string;
  id?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponsePlaylist[] | any>
) {
  try {
    const response = await getPlaylist();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({ message: "Not found" });
  }
}
