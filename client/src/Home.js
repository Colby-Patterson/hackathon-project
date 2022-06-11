import { useContext } from "react"
import { MoviesContext } from "./Movies/Moviesprovider"

const Home = () => {
  const { movies, updateMovies, deleteMovies, addMovies } = useContext(MoviesContext);

  return (
    <div className='moviescomponent'>
      <h2>home</h2>
      <p>{JSON.stringify(movies)}</p>

    </div>

  )
}
export default Home;