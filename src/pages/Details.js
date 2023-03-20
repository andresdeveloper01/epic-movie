import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useNavigate, useParams } from "react-router-dom"
import MovieDetails from "../components/MovieDetails"
import getMovieDetails from "../services/getMovieDetails"

const Details = () => {
    const [details, setDetails] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    const backPage = () => {
        navigate(-1)
    }

    useEffect(() => {
        getMovieDetails(id).then(setDetails)
    }, [id])

    return (
        <>
            {details && <Helmet>
                <title>Epic Movie | {details.title}</title>
                <meta name="description" content={`Details of ${details.title}`} />
            </Helmet>}
            {details && <MovieDetails details={details} backPage={backPage} />}
        </>
    )
}

export default Details