import { Heading, Text } from "@/components/design-system";
import {  SpotifyPlaylist } from "@/components/modules";

export default function ActivitySection(): React.JSX.Element {
  return (
    <section className="flex flex-col mb-12 w-screen">
      <Heading className="mt-5">Activity 🎬</Heading>
      <div className="mt-5 prose max-w-none dark:text-white text-black">
        <Text>This page contains a current activity.</Text>
        {/* <h2 className="dark:text-white text-black">Spotify Activity</h2> */}
        {/* <SpotifyPlaylist /> */}
        <h2 className="dark:text-white text-dark">Spotify Playlist</h2>
        <iframe
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/1nWEPUfaPWELV5V6yF7EKn?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: '560px' }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  );
}
