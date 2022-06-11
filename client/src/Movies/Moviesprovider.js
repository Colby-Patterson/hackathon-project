import { useEffect, useState } from "react";
import React from 'react'
import axios from 'axios'

export const MoviesContext = React.createContext();



const MoviesProvider = (props) => {
    let [movies, setMovies] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)
    let [show, setShow] = useState(false)
    let [name, setName] = useState(props.name)
    let [releasedate, setReleasedate] = useState(props.releasedate)
    let [quote, setQuote] = useState(props.quote)


    useEffect(() => {
        console.log('movieProvider mountes: getMovies api called')
        getMovies()
        return () => {
            console.log('MovieProvider unmounted')
        }
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
            let res = await axios.destroy(`/api/movies/${id}`)
            let newMovie = movies.filter((a) => a.id !== res.data.id)
        } catch (err) {
            alert('errors has occured in the deleteMovie')
        }
    }

    const handleSubmit = async (r) => {
        r.preventDefault();
        try {
            let res = await axios.put(`/api/movies/${props.id}`, {
                name,
                releasedate,
                quote,
            });
            console.log(res);
            props.updateMovies(res.data)
        } catch (err) {
            console.log(err)
        }
    };

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
                    <button onClick={() => setShow(!show)}>Edit</button>
                    {show && (
                        <>
                            <h1>Form</h1>
                            <form onSubmit={handleSubmit}>
                                <p>name</p>
                                <input value={name} onChange={(e) => setName(e.target.value)} />
                                <p>release date</p>
                                <input value={releasedate} onChange={(e) => setReleasedate(e.target.value)} />
                                <p>quote</p>
                                <input value={quote} onChange={(e) => setQuote(e.target.value)} />
                                <button>Save Changes</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
            )
        })
    }

    return (
        <MoviesContext.Provider value={{ movies, deleteMovie, updateMovies, addMovie, renderMovies }}>
            {props.children}
        </MoviesContext.Provider>

    );
};
export default MoviesProvider