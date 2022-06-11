import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Book = ({id, title, author, genre, removeBookFromList})=>{
  // const [deleteButton, showDeleteButton] = useState(true)
  const deleteBook = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`)
      removeBookFromList(id)
      } catch(err) {
      alert("Error has occured")
    }
  }

  return (
    <div>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <Link to={`/books/edit/${id}`}>Update Book</Link>
      <br />
      <Link to={`/books/${id}`}>Show Book</Link>
      <br />
      <button onClick={()=> deleteBook(id)}>Delete Book</button>
    </div>
  )
}

export default Book