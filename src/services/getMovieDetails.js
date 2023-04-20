import { MOVIEDB_API_KEY } from "./apiKey"

function getMovieDetails(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIEDB_API_KEY}&language=es-MX`)
        .then(res => res.json())
        .then(res => {
            const data = res
            return data
        })
}

export default getMovieDetails