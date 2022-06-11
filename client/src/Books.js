import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import Book from "./Book"

const Books = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getBooks()
  }, [])
  
  const getBooks = async () =>{
    try {
      let res = await axios.get('/api/books')
      setBooks(res.data)
    } catch(err) {
      alert("Error has occured")
    }
  }

  const removeBookFromList = (id)=>{
    let newBooks = books.filter(b=> b.id !== id)
    setBooks(newBooks)
  }

  const renderBooks = ()=>{
    return books.map(b=> <Book removeBookFromList={removeBookFromList} key={b.id} {...b} />)
  }

  return (
    <div>
      <h1>Books</h1>
      {renderBooks()}
      {/* <Link to="/book/edit/1">Update Book1</Link>
      <Link to="/book/1">Show Book1</Link>
      <hr />
      <Link to="/book/edit/2">Update Book2</Link>
      <Link to="/book/2">Show Book2</Link> */}
    </div>
  )
}

export default Books