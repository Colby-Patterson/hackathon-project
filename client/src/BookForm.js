import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const BookForm = () => {
  const {id} = useParams()
  const nav = useNavigate()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")

  useEffect(()=>{
    if(id){
      getBooks()
    }
  }, [])

  const getBooks = async ()=>{
    try {
    let res = await axios.get(`/api/books/${id}`)
    setTitle(res.data.title)
    setAuthor(res.data.author)
    setGenre(res.data.genre)
    } catch(err) {
      alert("Err has occured with get books")
    }
  }

  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(id){
      await axios.put(`/api/books/${id}`, {title, author, genre})
    }
    else {
      await axios.post('/api/books', {title, author, genre})
    }
    nav("/books")
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