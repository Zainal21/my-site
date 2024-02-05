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
    <>
      {border ? (
        <Border>
          <Img height={height} width={width} />
        </Border>
      ) : (
        <Img height={height} width={width} />
      )}
    </>
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
