import { useContext } from "react"
import { MoviesContext } from "./Moviesprovider"


const Movies = () => {
    const { renderMovies } = useContext(MoviesContext);
    let x = useContext(MoviesContext)
    return (
        <div className='moviecomponent'>
            <h1>Movies!</h1>
            {renderMovies()}
        </div>
    )
}
export default Movies