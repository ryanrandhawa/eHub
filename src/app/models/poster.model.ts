export class Poster {
  constructor(name, popularity, rating, firstAirDate, posterUrl) {
      this.name = name;
      this.popularity = popularity;
      this.rating = rating;
      this.firstAirDate = firstAirDate;
      this.posterPath = posterUrl;
  }

  name: string;
  popularity: number;
  rating: number;
  firstAirDate?: Date;
  posterPath: string;
}
