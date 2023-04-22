import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import ListOfMovies from '../components/ListOfMovies'
import getMovieList from '../services/getMovieList'

const List = () => {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  const { page, search } = useParams()

  useEffect(() => {
    getMovieList(search, page).then(setMovies)
  }, [page, search])

  const changeNextPage = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    navigate(`/list/${search}/${Number(page) + 1}`)
  }

  const changeBackPage = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    navigate(`/list/${search}/${Number(page) - 1}`)
  }

  if (movies === undefined) return <Navigate to='*' />

  return (
    <>
      <Helmet>
        <title>Epic Movie | {search}</title>
        <meta name='description' content={`List of ${search} movies`} />
      </Helmet>
      <div className='bg-black text-white'>
        <div className='w-full max-w-[1200px] mx-auto'>
          <ListOfMovies movies={movies} />
          {movies &&
            <div className='flex justify-center gap-5 m-10'>
              {page > 2 && <button className='h-6 hover:border-b-slate-50 hover:border-b-2' onClick={changeBackPage}>Anterior</button>}
              <p>{page}</p>
              {page < 500 && <button className='h-6 hover:border-b-slate-50 hover:border-b-2' onClick={changeNextPage}>Siguiente</button>}
            </div>}
        </div>
      </div>
    </>
  )
}

export default List
