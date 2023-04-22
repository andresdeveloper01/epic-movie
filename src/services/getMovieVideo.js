import { MOVIEDB_API_KEY } from './apiKey'

export function getMovieVideo (id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${MOVIEDB_API_KEY}&language=es-MX`

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res.results.length > 0) {
        return res.results[0].key
      } else {
        return fetch(`${url}&language=en-US`)
          .then((res) => res.json())
          .then((res) => {
            if (res.results.length > 0) {
              return res.results[0].key
            } else {
              throw new Error('No se encontraron videos para esta pelicula')
            }
          })
      }
    })
    .catch((err) => {
      console.log(err)
      return ('No se pudo conectar al servidor o No se encontraron videos para esta pelicula')
    })
}
