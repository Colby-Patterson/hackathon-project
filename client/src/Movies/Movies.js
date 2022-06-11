import { useContext } from "react"
import { MoviesContext } from "./Moviesprovider"


const Movies = () => {
    let x = useContext(MoviesContext)
    return (
        <div className='moviecomponent'>
            <h2>Movies!</h2>
            <p>let x = useContext(MoviesContext)... x is:{JSON.stringify(x)}</p>
        </div>
    )
}
export default Movies