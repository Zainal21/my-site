import Section from "../ui/section";
import { SpotifyCurrentlyPlaying } from "../base/home/sportify-current-playing";

export default function RecentPlaylist() {
  return (
    <Section className="space-y-9 pt-10">
      <h1 className="text-gray-100 lg:text-2xl text-lg text-medium font-bold mb-8  mt-8 underline">
        My Music Activity
      </h1>
      <SpotifyCurrentlyPlaying />
    </Section>
  );
}
