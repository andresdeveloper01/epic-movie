import { MOVIEDB_API_KEY } from "./apiKey";

function getMovieSearch(keyword) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=es&query=${keyword}&page=1`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.results;
      return data;
    });
}

export default getMovieSearch;