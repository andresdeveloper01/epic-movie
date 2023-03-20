import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillFire, AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ListOfMovies from "../components/ListOfMovies";
import getMovieList from "../services/getMovieList";

function Home() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState("popular");
  const navigate = useNavigate()

  useEffect(() => {
    getMovieList(search).then(setMovies);
  }, [search]);

  const handlePage = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    navigate(`/list/${search}/2`)
  }

  return (
    <>
      <Helmet>
        <title>Epic Movie | Home</title>
      </Helmet>
      <div className="bg-black text-white">
        <div className="flex justify-around py-2 h-10">
          <button className="flex gap-1 items-center  hover:border-b-slate-50 hover:border-b-2" onClick={() => setSearch('popular')}><AiFillFire className="text-sm" /> Popular</button>
          <button className="flex gap-1 items-center hover:border-b-2" onClick={() => setSearch('top_rated')}><AiFillStar /> Mejor valoradas</button>
        </div>
        <div className="w-full max-w-[1200px] mx-auto">
          {movies && <ListOfMovies movies={movies} />}
          <div className="flex justify-around h-12 items-center">
            {movies && <button className="h-6 hover:border-b-slate-50 hover:border-b-2" onClick={handlePage}>Descubre más</button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
