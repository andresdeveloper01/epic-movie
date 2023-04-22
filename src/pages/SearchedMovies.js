import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import ListOfMovies from '../components/ListOfMovies'
import getMovieSearch from '../services/getMovieSearch'

const SearchedMovies = () => {
  const [movies, setMovies] = useState(null)
  const { keyword } = useParams()

  useEffect(() => {
    getMovieSearch(keyword).then(setMovies)
  }, [keyword])

  return (
    <>
      <Helmet>
        <title>Search of {keyword}</title>
        <meta name='description' content={`Search of ${keyword}`} />
      </Helmet>
      {movies &&
        <div className='bg-black text-white h-full'>
          {movies.length !== 0 ? <ListOfMovies movies={movies} /> : <div className='text-center h-screen'><b><p>No hay resultados de "{keyword}"</p></b></div>}
        </div>}
    </>
  )
}

export default SearchedMovies
