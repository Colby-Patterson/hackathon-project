import { useEffect, useState } from "react";
import React from 'react'
import axios from 'axios'
import UpdateMoviesForm from "./updateMoviesForm";
import MovieForm from "./MovieForm";

export const MoviesContext = React.createContext();



const MoviesProvider = (props) => {
    let [movies, setMovies] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)
    const [name, setName] = useState("")
    const [releasedate, setReleasedate] = useState("")
    const [quote, setQuote] = useState("")
    let [show, setShow] = useState(false)



    useEffect(() => {
        console.log('movieProvider mountes: getMovies api called')
        getMovies()
        // return () => {
        // console.log('MovieProvider unmounted')
        // }
    }, [])

    const updateMovies = async (movie) => {
        try {
            let res = await axios.put(`/api/movies/${movie.id}`, movie)
            let updatedMovie = movies.map(a => a.id === res.data.id ? res.data : a)
            setMovies(updatedMovie)
        } catch (err) {
            alert('error has occuted in the updateMovie')
        }
    }

    const addMovie = async (movie) => {
        try {
            let res = await axios.post(`/api/movies`, movie)
            setMovies([...movie, res.data])
        } catch (err) {
            alert('error has occured on the addMovie')
            console.log(err)
        }
    }

    const getMovies = async () => {
        try {
            let res = await axios.get('/api/movies')
            setMovies(res.data)
            setLoading(false)
        } catch (err) {
            alert('error occured with the getMovies')
            setError(err)
            setLoading(false)
        }
    }



    const deleteMovie = async (id) => {
        try {
            let res = await axios.delete(`/api/movies/${id}`)
            let newMovies = movies.filter((a) => a.id !== res.data.id)
            setMovies(newMovies)
        } catch (err) {
            alert('errors has occured in the deleteMovie')
            console.log(err)
        }
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ name, quote, releasedate });
        try {
            let res = await axios.post("/api/movies", { name, quote, releasedate });
            console.log(res.data);
            addMovie(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const renderMovieForm = () => {
        return (
            <div className="Formcontainer">
                <button onClick={() => setShow(!show)}>Add Movie!</button>
                {show && (
                    <>
                        <p>Add movie</p>
                        <form onSubmit={handleSubmit}>
                            <p>Title</p>
                            <input value={name} onChange={(r) => setName(r.target.value)} />
                            <p>Release Date</p>
                            <input value={releasedate} onChange={(r) => setReleasedate(r.target.value)} />
                            <p>Quotes</p>
                            <input value={quote} onChange={(r) => setQuote(r.target.value)} />
                            <button>Add movie</button>
                        </form>
                    </>
                )}
            </div>
        )
    }



    const renderMovies = () => {
        if (loading) {
            return <p>Loading please wait</p>
        }
        if (error) {
            return <p>{JSON.stringify(error)}</p>
        }
        return movies.map((m) => {
            return (<div key={m.id} className='movieCard'>
                <h3>
                    Film's Title: {m.name} </h3> <h3>Release Date: {m.releasedate}</h3>
                <p>Famous quote from film: {m.quote}</p>
                <div>
                    <button onClick={() => deleteMovie(m.id)}>Delete</button>
                    <UpdateMoviesForm {...m} updateMovies={updateMovies} />
                </div>
            </div>
            )
        }
        );
    }

    return (
        <MoviesContext.Provider value={{ renderMovies, renderMovieForm }}>
            {props.children}
        </MoviesContext.Provider>

    );
};
export default MoviesProvider