import { useCurrentlyPlaying } from "@/hooks/useSpotifyCurrentlyPlaying";
import { PlayCircle } from "react-feather";
import cn from "classnames";

export default function SpotifyCurrentlyPlaying(): React.JSX.Element {
  const { data } = useCurrentlyPlaying();
  return (
    <div className="w-[90%] md:w-[40rem]  flex items-center relative space-x-4 bg-[#10161a] dark:bg-[#10161a] px-5 rounded-md shadow-single border border-teal-100 dark:border-teal-900">
      {data?.albumImageUrl ? (
        <img
          className="w-12 h-10 rounded-sm"
          src={data?.albumImageUrl || ""}
          alt={data?.artist}
        />
      ) : null}
      <PlayCircle
        aria-hidden
        size={20}
        className={cn(
          "flex-shrink-0 w-10 h-10",
          data?.isPlaying ? "text-blue-500" : "text-gray-600"
        )}
      />
      <p
        className="leading-tight dark:text-white text-gray-600"
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
            className="font-semibold dark:text-white text-black flex-1 min-w-0 hover:underline helper-link-cover"
          >
            {data.title}
          </a>
        ) : (
          <span className="font-semibold dark:text-white text-black flex-1 min-w-0">
            Music Not Playing
          </span>
        )}{" "}
        <span className="dark:text-gray-300 text-black">–</span>&nbsp;
        <span className="dark:text-gray-300 text-black">{data?.artist ?? "Spotify"}</span>
      </p>
    </div>
  );
}
