import Section from "../ui/section";
import PlaylistCard from "../base/home/playlist-card";
import { SpotifyCurrentlyPlaying } from "../base/home/sportify-current-playing";

export default function RecentPlaylist() {
  return (
    <Section className="space-y-9 pt-10">
      <h1 className="text-gray-100 text-2xl text-xl  text-medium font-bold mb-8  mt-8 underline">
        Recent Playlist
      </h1>
      <SpotifyCurrentlyPlaying />
      <div className="space-y-4">
        <h3 className="text-lg sm:text-md lg:text-sm font-semibold">
          Top tracks
        </h3>
        <div>
          <PlaylistCard />
        </div>
      </div>
    </Section>
  );
}
