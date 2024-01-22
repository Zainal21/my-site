import React from "react";
import { SpotifyPlaylist } from "@/types/spotify";
import { useSpotifyPlaylist } from "@/hooks/useSpotifyPlaylist";

const SpotifyPlaylistCard: React.FC = () => {
  const { data } = useSpotifyPlaylist();
  return (
    <React.Fragment>
      {data.map((data: SpotifyPlaylist) => (
        <div
          key={data.id}
          className="flex items-center relative space-x-4 my-2 dark:bg-[#10161a]/50 px-5 rounded-md shadow-single border border-teal-100 dark:border-teal-900"
        >
          {data?.albumImageUrl ? (
            <img
              className="w-12 h-10 rounded-sm"
              src={data?.albumImageUrl || ""}
              alt={data?.artist}
            />
          ) : null}
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
            <span className="dark:text-gray-300 text-black">
              {data?.artist ?? "Spotify"}
            </span>
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default SpotifyPlaylistCard;
