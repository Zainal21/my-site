import Image from "next/image";
import { Border } from "../Border";
import { useState } from "react";

interface AvatarProps {
  border: boolean;
  height: number;
  width: number;
}

const Avatar: React.FC<AvatarProps> = ({ border, height, width }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative dark:bg-alter-mid rounded-full border-2 border-teal-200 dark:border-teal-200 text-gray-600 dark:text-gray-200 bg-red-500">
        {border ? (
          <Border>
            <Img height={height} width={width} />
          </Border>
        ) : (
          <Img height={height} width={width} />
        )}
        <StatusBadge />
      </div>
    </div>
  );
};

const StatusBadge: React.FC = () => {
  return (
    <div className="absolute -top-2 right-0 translate-x-2/4">
      <div className="backdrop-blur-md bg-gray-200 dark:bg-gray-600 py-2 px-2 rounded-xl text-sm max-w-[150px] text-center border-2 border-teal-200 dark:border-teal-200">
        <div className="flex items-center">
          <span className="relative flex size-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
            <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
          </span>
          <p className="text-xs font-normal">Online</p>
        </div>
      </div>
    </div>
  );
};

interface ImgProps {
  height: number;
  width: number;
}

const Img: React.FC<ImgProps> = ({ height, width }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      title="My Emoji"
      src="/images/avatar.jpg"
      height={height}
      alt="My Emoji"
      width={width}
      quality={100}
      className={`
      rounded-full duration-700 ease-in-out group-hover:opacity-75
      ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      })`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default Avatar;
