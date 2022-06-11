import axios from "axios"
import { Link } from "react-router-dom"

const Book = ({id, title, author, genre, removeBookFromList})=>{
  const deleteBook = async (id) => {
    try {
      let res = await axios.delete(`/api/books/${id}`)
      removeBookFromList(id)
      } catch(err) {
      alert("Error has occured")
    }
  }

  return (
    <div>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <Link to={`/books/edit/${id}`}>Update Book</Link>
      {/* <Link to="/book/1">Show Book1</Link> */}
      <button onClick={()=> deleteBook(id)}>Delete Book</button>
    </div>
  )
}

export default Book