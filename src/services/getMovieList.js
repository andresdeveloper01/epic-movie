function getMovieList(search, page) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${search}?api_key=5fe187264bbce72148a2c05da2a00942&language=es&page=${page || 1}`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.results;
      return data;
    });
}

export default getMovieList;
