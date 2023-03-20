function getMovieSearch(keyword) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5fe187264bbce72148a2c05da2a00942&language=es&query=${keyword}&page=1`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.results;
      return data;
    });
}

export default getMovieSearch;