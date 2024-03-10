import { useState, useEffect, } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://myflix2024-447746b678a9.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log("movies from api:", data);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={() => {
            setSelectedMovie(movie);
          }}
        />
      ))}
    </div>
  );
};





// {
//   id: 1,
//   title: "Jaws",
//   image:
//     "https://m.media-amazon.com/images/I/71lhAl4ytXL._SL1500_.jpg",
//   director: "Steven Spielberg",
//   genre: "Thriller",
//   description: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
// },
// {
//   id: 2,
//   title: "The Empire Strikes Back",
//   image:
//     "https://m.media-amazon.com/images/I/71HF40t83VL._SL1372_.jpg",
//   director: "Irvin Kerschner",
//   genre: "Sci-Fi",
//   description: "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
// },
// {
//   id: 3,
//   title: "Rushmore",
//   image:
//     "https://m.media-amazon.com/images/I/716wYQ6cGGS._SL1500_.jpg",
//   director: "Wes Anderson",
//   genre: "Comedy",
//   description: "A teenager at Rushmore Academy falls for a much older teacher and befriends a middle-aged industrialist. Later, he finds out that his love interest and his friend are having an affair, which prompts him to begin a vendetta.",
// },

