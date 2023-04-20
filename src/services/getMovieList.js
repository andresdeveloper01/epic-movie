import { MOVIEDB_API_KEY } from "./apiKey";

function getMovieList(search, page) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${search}?api_key=${MOVIEDB_API_KEY}&language=es-MX&page=${page || 1}`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.results;
      return data;
    });
}

export default getMovieList;
