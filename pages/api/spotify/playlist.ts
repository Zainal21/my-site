//  API route support: https://nextjs.org/docs/api-routes/introduction
import { getPlaylist } from "@/libs/spotify";
import type { NextApiRequest, NextApiResponse } from "next";
import useSWR from "swr";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const response = await getPlaylist();
    return res.status(200).json(response);
  } catch (err) {}
  return res.status(404).json({ message: "Not found" });
}

