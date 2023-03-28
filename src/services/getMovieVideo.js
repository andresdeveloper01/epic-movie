function getMovieVideo(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=5fe187264bbce72148a2c05da2a00942&language=es-MX`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.results[0].key;
      return data;
    });
}

export default getMovieVideo;