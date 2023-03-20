import imageNotFound from "../assets/imageNotFound.png"
import { useParams } from "react-router-dom"
import getMovieVideo from "../services/getMovieVideo"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player/youtube"
const MovieDetails = ({ details, backPage }) => {
    const [video, setVideo] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getMovieVideo(id).then(setVideo)
    }, [id])

    const horas = Math.floor(details.runtime / 60);
    const minutosRestantes = details.runtime % 60;
    // convertir minutos a horas

    return (
        <div className="bg-black text-white">
            <div className="">
                <h1 className="text-[32px]">{details.title}</h1>
                <h2>Título original: {details.original_title}</h2>
                <p>{details.release_date}</p>
                <p>{horas + 'h' + minutosRestantes + 'min'}</p>
                <div className="flex justify-between w-auto">
                    {details.poster_path ? <img className="w-auto h-auto" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} /> : <img src={imageNotFound} alt="img not found" />}
                    <ReactPlayer width='100%' height='auto' className='w-auto' url={`https://www.youtube.com/watch?v=${video}`} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetails