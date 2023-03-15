function getMovieSearch(keywoard) {
  return fetch(
    `https://api.themoviedb.org/3/movie/?api_key=5fe187264bbce72148a2c05da2a00942&language=en-US&query=${keywoard}&page=1
    }`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.results;
      return data;
    });
}

export default getMovieSearch;