import { useContext } from "react"
import { MoviesContext } from "./Moviesprovider"


const Movies = () => {
    const { renderMovies, renderMovieForm } = useContext(MoviesContext);
    let x = useContext(MoviesContext)
    return (
        <div className='moviecomponent'>
            <h1>Movies!</h1>
            {renderMovieForm()}
            {renderMovies()}
        </div>
    )
}
export default Movies