import { IGenreResponseProps, IMovieProps } from "../interface/Interfaces";
import { MovieCard } from "./MovieCard";

interface IContentProps {
  movies: IMovieProps[]
  selectedGenre: IGenreResponseProps
}

export function Content(props: IContentProps) {
  const { movies,selectedGenre} = props;
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}