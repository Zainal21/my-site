import { Heading, Text } from "@/components/design-system";
import {
  SpotifyCurrentPlaying,
  SpotifyPlaylistCard,
} from "@/components/modules";
export default function ActivitySection(): React.JSX.Element {
  return (
    <section className="flex flex-col mb-12 w-full">
      <Heading className="mt-5">Activity 🎵</Heading>
      <div className="mt-5 prose max-w-none dark:text-white text-black">
        <Text>This page contains a current activity.</Text>
        <h2 className="dark:text-white text-black">Spotify Activity</h2>
        <SpotifyCurrentPlaying />
        <h2 className="dark:text-white text-dark">Spotify Playlist</h2>
        <SpotifyPlaylistCard />
      </div>
    </section>
  );
}
