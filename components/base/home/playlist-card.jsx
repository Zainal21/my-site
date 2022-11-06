// import Image from "next/image";

export default function PlaylistCard() {
  return (
    <div className="flex flex-row items-start relative space-x-2 py-2 border-b border-b-gray-800">
      <p className="flex-shrink-0 font-semibold select-none tabular-nums text-dary-400">
        01
      </p>
      <img
        className="w-12 h-12 rounded-sm"
        src="https://i.scdn.co/image/ab67616d0000b273252feb3d7b37d1cc48fdd13e"
        alt="Saveur cheveux - Totorro"
      />
      <div className="flex-1 min-w-0">
        <p className="flex items-center flex-1 min-w-0">
          <a
            className="helper-link-cover truncate font-semibold hover:underline"
            href="https://open.spotify.com/track/2zG2D1JTR9v4tk0ipKWx7N"
            title="Saveur cheveux - Totorro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saveur cheveux
          </a>
        </p>
        <span className="block flex-1 min-w-0 truncate text-chungking-grey-300">
          Totorro
        </span>
      </div>
    </div>
  );
}
