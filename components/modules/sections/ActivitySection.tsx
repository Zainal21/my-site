import { Heading, Text } from "@/components/design-system";
import { SpotifyCurrentPlaying } from "@/components/modules";

export default function ActivitySection(): React.JSX.Element {
  return (
    <section className="flex flex-col mb-12 w-full">
      <Heading className="mt-5">Activity 🎵</Heading>
      <div className="mt-5 prose max-w-none dark:text-white text-black">
        <Text>This page contains a current activity.</Text>
        <h2 className="dark:text-white text-black">Spotify Activity</h2>
        <SpotifyCurrentPlaying />
        <h2 className="dark:text-white text-dark">Spotify Playlist</h2>
        <iframe
          className="md:w-[40rem] border rounded-xl border-teal-100 dark:border-teal-900 relative md:min-h-screen  h-screen min-w-10 md:min-w-full"
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/1nWEPUfaPWELV5V6yF7EKn?utm_source=generator&theme=0`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  );
}
