import imageNotFound from "../assets/imageNotFound.png"
import { useParams } from "react-router-dom"
import getMovieVideo from "../services/getMovieVideo"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player/youtube"
import { BsArrowLeft } from 'react-icons/bs'

const MovieDetails = ({ details, backPage }) => {
    const [video, setVideo] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getMovieVideo(id).then(setVideo)
    }, [id])
    console.log(details);
    const horas = Math.floor(details.runtime / 60);
    const minutosRestantes = details.runtime % 60;

    return (
        <div className="bg-black text-white h-full">
            <div className="mx-2 py-3">
                <h1 className="text-[32px] leading-8">{details.title}</h1>
                <h2 className="text-[rgba(255,255,255,.7)] text-sm mt-1">Título original: {details.original_title}</h2>
                <p className="text-[rgba(255,255,255,.7)] text-sm mb-2">{details.release_date} · {horas + 'h' + minutosRestantes + 'min'}</p>
            </div>
            <div className="min-[482px]:mx-5">
                <div className="flex w-full flex-wrap ">
                    {details.poster_path ? <img className="w-24 absolute left-3 top-[35rem] min-[482px]:w-[120px] min-[482px]:left-4 min-[482px]:top-[33rem]" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} /> : <img src={imageNotFound} alt="img not found" />}
                    <ReactPlayer className='w-full ' url={`https://www.youtube.com/watch?v=${video}`} />
                </div>
                <div className="pl-[calc(95px+1rem)] min-[482px]:pl-[calc(120+1rem)] my-2">
                    <section className="mx-3">
                        <div className="flex gap-1 flex-wrap mb-2">
                            {details.genres.map(({ id, name }) => (
                                <span className="rounded-2xl border-[rgba(255,255,255,.7)] p-1 border-[1px] text-sm" key={id}>{name}</span>
                            ))}
                        </div>
                        <p className="text-sm text-ellipsis min-[482px]:text-base">{details.overview}</p>
                    </section>
                </div>
            </div>

            <div className="flex justify-center my-7">
                <button className="flex gap-1 items-center hover:border-b-2" onClick={backPage}><BsArrowLeft />Back</button>
            </div>
        </div>
    )
}

export default MovieDetails