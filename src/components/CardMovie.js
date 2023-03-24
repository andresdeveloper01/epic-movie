import { AiFillStar } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import imageNotFound from "../assets/imageNotFound.png"

const CardMovie = ({ id, poster_path, title, release_date, vote_average }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/details/${id}`)} className="cursor-pointer h-auto bg-[#1a1a1a]  w-[180px] rounded-b mb-2" id={id}>
      {poster_path ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /> : <img src={imageNotFound} alt="img not found" />}
      <div className="m-1 flex items-center gap-1">
        <AiFillStar className="text-yellow-500 w-4" />
        <p>{vote_average}</p>
      </div>
      <Link className="h-10 p-2 leading-4 text-ellipsis overflow-hidden block ">
        <span className=" whitespace-nowrap text-inherit">{title}</span>
      </Link>
      <div className="my-5">
        <p className="p-2">{release_date}</p>
      </div>
    </div>
  );
};

export default CardMovie;
