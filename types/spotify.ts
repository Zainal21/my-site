export type SpotifyExternalUrls = {
  spotify: string;
};

export type SpotifyTrackArtist = {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
};
export type SpotifyAlbum = {
  album_type: string;
  artists: SpotifyTrackArtist[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyTrackAlbumImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: "album";
  uri: string;
};

export type SpotifyTrackAlbumImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyTrack = {
  album: SpotifyAlbum;
  artists: SpotifyTrackArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
};

export type SpotifyCurrentNowPlaying = {
  timestamp: number;
  context: {
    external_urls: SpotifyExternalUrls;
    href: string;
    type: string;
    uri: string;
  };
  progress_ms: number;
  item: SpotifyTrack;
  currently_playing_type: "track" | "episode";
  is_playing: boolean;
};
