import imageNotFound from '../assets/imageNotFound.png'
import videoNotFound from '../assets/videoNotFound.png'
import { useParams } from 'react-router-dom'
import Youtube from 'react-youtube'
import { BsArrowLeft } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MoonLoader } from 'react-spinners'

const MovieDetails = ({ details, backPage }) => {
  const { id } = useParams()
  const { video, loading } = useMovieDetails({ id })
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const horas = Math.floor(details.runtime / 60)
  const minutosRestantes = details.runtime % 60

  return (
    <div className='text-white h-full max-w-[1200px] mx-auto'>
      <div className='min-[482px]:mx-5 mx-2 py-3'>
        <h1 className='text-[32px] leading-8'>{details.title}</h1>
        <h2 className='text-[rgba(255,255,255,.7)] text-sm mt-1'>Título original: {details.original_title}</h2>
        <p className='text-[rgba(255,255,255,.7)] text-sm mb-2 flex  items-center'>{details.release_date} · {horas + 'h' + minutosRestantes + 'min'} ·  <AiFillStar className='text-yellow-400 w-4 mx-1' />{details.vote_average}</p>
      </div>
      <div className='min-[482px]:mx-5'>
        <div className='flex w-full flex-wrap min-[600px]:flex-nowrap'>
          {details.poster_path ? <img className='w-24 min-[600px]:static min-[600px]:w-[calc(27.65%-0.125rem)] absolute left-3 top-[35rem] min-[482px]:w-[120px] min-[482px]:left-5 min-[482px]:top-[33rem]' src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} /> : <img src={imageNotFound} alt='img not found' />}
          <div className='min-[600px]:w-[calc(72.35%-0.125rem)] min-[600px]:ml-2 min-[600px]:h-auto w-[640px] h-[340px]'>
            {loading
              ? (
                <div className='flex justify-center items-center h-full'>
                  <MoonLoader color='#fff' loading={loading} size={120} speedMultiplier={2} />
                </div>
                )
              : video ? <Youtube opts={opts} videoId={video} style={{ width: '100%', height: '100%' }} /> : <img className='min-[600px]:ml-2' src={videoNotFound} alt='img not found' />}
          </div>
        </div>
        <div className='pl-[calc(95px+1rem)] min-[600px]:pl-0 min-[482px]:pl-[calc(120px+1rem)] my-2'>
          <section className='mx-3'>
            <div className='flex gap-1 flex-wrap mb-2'>
              {details.genres.map(({ id, name }) => (
                <span className='rounded-2xl border-[rgba(255,255,255,.7)] p-1 border-[1px] text-sm' key={id}>{name}</span>
              ))}
            </div>
            <p className='text-sm text-ellipsis min-[482px]:text-base'>{details.overview}</p>
          </section>
        </div>
      </div>

      <div className='flex justify-center my-7'>
        <button className='flex gap-1 items-center hover:border-b-2' onClick={backPage}><BsArrowLeft />Back</button>
      </div>
    </div>
  )
}

export default MovieDetails
