import Section from "../ui/section";
import PlaylistCard from "../base/home/playlist-card";
import { SpotifyCurrentlyPlaying } from "../base/home/sportify-current-playing";
import { useSpotifyTopTracks } from "@/lib/use-top-track";

export default function RecentPlaylist() {
  // const topTrack = useSpotifyTopTracks();

  // console.log("top track >>", topTrack);
  return (
    <Section className="space-y-9 pt-10">
      <h1 className="text-gray-100 text-2xl text-xl  text-medium font-bold mb-8  mt-8 underline">
        My Music Activity
      </h1>
      <SpotifyCurrentlyPlaying />
      {/* <div className="space-y-4">
        <h3 className="text-lg sm:text-md lg:text-sm font-semibold">
          Top tracks
        </h3>
        <div>
          <PlaylistCard />
        </div>
      </div> */}
    </Section>
  );
}
