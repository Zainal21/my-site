// Next.js
import Image from "next/image";
import { Border } from "../Border";

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

const Img: React.FC<{ height: number; width: number }> = ({
  height,
  width,
}) => {
  return (
    <Image
      className="rounded-full"
      title="My Emoji"
      src="/photo-profil"
      height={height}
      alt="My Emoji"
      width={width}
      quality={100}
    />
  );
};

export default Avatar;
