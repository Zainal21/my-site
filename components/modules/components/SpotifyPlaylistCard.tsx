import React, { useState } from "react";
import { SpotifyPlaylist } from "@/types/spotify";
import { useSpotifyPlaylist } from "@/hooks/useSpotifyPlaylist";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const SpotifyPlaylistCard: React.FC = () => {
  const { data, isLoading, isError } = useSpotifyPlaylist();
  const [isLoadingImage, setLoadingImage] = useState(true);
  const { theme } = useTheme();

  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 10; i++) {
      skeletons.push(
        <div key={i} className="mb-4">
          <Skeleton
            style={{ marginTop: "0.5rem" }}
            highlightColor={theme === "dark" ? "#000000" : "#F5F5F5"}
            baseColor={theme === "dark" ? "#10161a" : "#F5F5F5"}
            className="w-12 h-10 p-14 dark:bg-gray-800 bg-gray-200"
          />
        </div>
      );
    }
    return skeletons;
  };

  return (
    <React.Fragment>
      {isError && (
        <div className="text-gray-800 dark:text-gray-100">
          Failed Fetch Data
        </div>
      )}
      {isLoading ? (
        <div className="text-gray-800 dark:text-gray-100">
          {renderSkeletons()}
        </div>
      ) : (
        (data || [])?.map((data: SpotifyPlaylist) => (
          <div
            key={data.id}
            className="flex items-center relative space-x-4 my-2 dark:bg-[#10161a]/50 bg-gray-100/50 px-5 rounded-md shadow-single border border-teal-100 dark:border-teal-900"
          >
            {data?.albumImageUrl ? (
              <Image
                width={100}
                height={100}
                src={data?.albumImageUrl || ""}
                alt={data?.artist || ""}
                className={`
                duration-700 ease-in-out group-hover:opacity-75 w-12 h-10 rounded-sm
                ${
                  isLoadingImage
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
                onLoadingComplete={() => setLoadingImage(false)}
                style={{ width: "10%", height: "auto" }}
              />
            ) : null}
            <p
              className="leading-tight dark:text-gray-100 text-gray-600"
              title={
                data
                  ? `${data.title || "Not Playing"} - ${
                      data.artist || "Spotify"
                    }`
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
        ))
      )}
    </React.Fragment>
  );
};

export default SpotifyPlaylistCard;
