import cn from "classnames";
import { useCurrentlyPlaying } from "@/lib/use-currently-playing";
import { PlayCircle } from "react-feather";

export function SpotifyCurrentlyPlaying() {
  const { data } = useCurrentlyPlaying();
  return (
    <div className="flex items-start relative space-x-4 bg-gray-700 px-5 py-4 rounded-md shadow-single">
      <PlayCircle
        aria-hidden
        size={20}
        className={cn(
          "flex-shrink-0",
          data?.isPlaying ? "text-blue-500" : "text-gray-500"
        )}
      />
      <p
        className="leading-tight"
        title={
          data
            ? `${data.title || "Not Playing"} - ${data.artist || "Spotify"}`
            : undefined
        }
      >
        {data?.songUrl ? (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white flex-1 min-w-0 hover:underline helper-link-cover"
          >
            {data.title}
          </a>
        ) : (
          <span className="font-semibold text-white flex-1 min-w-0">
            Not Playing
          </span>
        )}{" "}
        <span className="text-gray-300">–</span>&nbsp;
        <span className="text-gray-300">{data?.artist ?? "Spotify"}</span>
      </p>
    </div>
  );
}
