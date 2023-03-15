import CardMovie from "./CardMovie";

const ListOfMovies = ({ movies }) => {
  return (
    <div className="grid gap-2 grid-cols-16 mx-[5px] justify-items-center">
      {movies.map(({ id, poster_path, title, release_date, vote_average }) => (
        <CardMovie
          key={id}
          id={id}
          poster_path={poster_path}
          title={title}
          release_date={release_date}
          vote_average={vote_average}
        />
      ))}
    </div>
  );
};

export default ListOfMovies;
