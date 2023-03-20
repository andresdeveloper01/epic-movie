function getMovieDetails(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5fe187264bbce72148a2c05da2a00942&language=es`)
        .then(res => res.json())
        .then(res => {
            const data = res
            return data
        })
}

export default getMovieDetails