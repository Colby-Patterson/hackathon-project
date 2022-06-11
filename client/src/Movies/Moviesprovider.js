import { useEffect, useState } from "react";
import React from 'react'
import axios from 'axios'

export const MoviesContext = React.createContext();



const MoviesProvider = (props) => {
    let [movies, setMovies] = useState([])

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
        } catch (err) {
            alert('error occured with the getMovies')
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

    return (
        <MoviesContext.Provider value={{ movies, deleteMovie, updateMovies, addMovie }}>
            {props.children}
        </MoviesContext.Provider>

    );
};
export default MoviesProvider