export interface TvList {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: TvListItem[];
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path: null;
}

export interface TvListItem {
  original_name: string;
  genre_ids: number[];
  media_type: string;
  name: string;
  popularity: number;
  origin_country: string[];
  vote_count: number;
  first_air_date: string;
  backdrop_path: string;
  original_language: string;
  id: number;
  vote_average: number;
  overview: string;
  poster_path: string;
}
