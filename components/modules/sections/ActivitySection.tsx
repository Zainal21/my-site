import { Heading, Text } from "@/components/design-system";
import {
  SpotifyCurrentPlaying,
  SpotifyPlaylistCard,
} from "@/components/modules";

export default function ActivitySection(): React.JSX.Element {
  return (
    <section className="flex flex-col mb-12 mt-1 w-[80vw]">
      <Heading className="mt-5">Activity 🎵</Heading>
      <div className="mt-5 prose dark:text-gray-100 text-[#10161a]">
        <Text>This page contains a current activity.</Text>
        <div className="space-y-8">
            <h2 className="dark:text-gray-100 text-[#10161a]">Spotify Activity</h2>
              <SpotifyCurrentPlaying />
            <h2 className="dark:text-gray-100 text-dark">Spotify Playlist</h2>
            <div className="flex flex-col gap-16 mt-10">
              <SpotifyPlaylistCard />
            </div>
        </div>
      </div>
    </section>
  );
}
