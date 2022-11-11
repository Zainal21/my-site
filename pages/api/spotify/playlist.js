import { getPlaylist } from "@/lib/sportify";

const handler = async (req, res) => {
  try {
    const response = await getPlaylist();
    console.log(response);
    return res.status(200).json({ tracks });
  } catch (err) {}
  return res.status(404).json({ message: "Not found" });
};

export default handler;
