import axios from "axios"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const BookForm = () => {
  const {id} = useParams()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(id){
      await axios.put(`/api/books/${id}`, {title, author, genre})
    }
  }

  return(
    <div>
      <h1>Book Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Title: </p>
        <input value={title} onChange={(e => setTitle(e.target.value))} />
        <p>Author: </p>
        <input value={author} onChange={(e => setAuthor(e.target.value))} />
        <p>Genre: </p>
        <input value={genre} onChange={(e => setGenre(e.target.value))} />
        <button>Submit</button>
      </form>
      <Link to="/books">Back to books</Link>
    </div>
  )
}

export default BookForm