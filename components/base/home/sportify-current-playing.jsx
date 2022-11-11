import cn from "classnames";
import { useCurrentlyPlaying } from "@/lib/use-currently-playing";
import { PlayCircle } from "react-feather";

export function SpotifyCurrentlyPlaying() {
  const { data } = useCurrentlyPlaying();
  return (
    <div className="flex items-center relative space-x-4 bg-gray-700 px-5 py-4 rounded-md shadow-single">
      {data?.albumImageUrl ? (
        <img
          className="w-12 h-12 rounded-sm"
          src={data?.albumImageUrl || ""}
          alt={data?.artist}
        />
      ) : null}
      <PlayCircle
        aria-hidden
        size={20}
        className={cn(
          "flex-shrink-0 w-10 h-10",
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
            Music Not Playing
          </span>
        )}{" "}
        <span className="text-gray-300">–</span>&nbsp;
        <span className="text-gray-300">{data?.artist ?? "Spotify"}</span>
      </p>
    </div>
  );
}
