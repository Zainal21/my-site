import { useCurrentlyPlaying } from "@/hooks/useSpotifyCurrentlyPlaying";
import { PlayCircle } from "react-feather";
import cn from "classnames";
import Image from "next/image";

export default function SpotifyCurrentlyPlaying(): React.JSX.Element {
  const { data } = useCurrentlyPlaying();
  return (
    <div className="text-center p-5 w-[100%] md:w-[40rem] md:h-20 flex md:flex-row flex-col items-center  space-x-2 dark:bg-[#10161a]/50 bg-gray-100/50 rounded-md shadow-single border border-teal-100 dark:border-teal-900">
      {data?.albumImageUrl ? (
        <Image
          width={80}
          height={80}
          className="sm:w-12 sm:h-12 w-20 rounded-sm"
          src={data?.albumImageUrl || ""}
          alt={data?.artist}
        />
      ) : null}
      <PlayCircle
        aria-hidden
        size={20}
        className={cn(
          "flex-shrink-0 w-8 h-8",
          data?.isPlaying ? "text-blue-500" : "text-gray-600"
        )}
      />
      <p
        className="leading-tight dark:text-gray-100 text-gray-600"
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
            className="font-semibold dark:text-gray-100 text-[#10161a] flex-1 min-w-0 hover:underline helper-link-cover"
          >
            {data.title}
          </a>
        ) : (
          <span className="font-semibold dark:text-gray-100 text-[#10161a] flex-1 min-w-0">
            Music Not Playing
          </span>
        )}{" "}
        <span className="dark:text-gray-300 text-gray-800">–</span>&nbsp;
        <span className="dark:text-gray-300 text-gray-800">
          {data?.artist ?? "Spotify"}
        </span>
      </p>
    </div>
  );
}
