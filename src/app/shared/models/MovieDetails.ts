import { Genre } from "./Genre";
import { Trailer } from "./Trailer";

export  interface MovieDetails{
    id:               number;
    title:            string;
    overview:         string;
    tagline:          string;
    budget:           number;
    revenue:          number;
    imdbUrl:          string;
    tmdbUrl:          string;
    posterUrl:        string;
    backdropUrl:      string;
    originalLanguage: string;
    releaseDate:      string;
    runTime:          number;
    price:            number;
    genres:           Genre[];
    trailers:         Trailer[];
    casts:            Cast[];
}

export interface Cast {
    name:        string;
    id:          number;
    profilePath: string;
    character:   string;
}


