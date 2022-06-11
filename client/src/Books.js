import { useEffect, useState } from "react"
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
      setLoading(false)
    } catch(err) {
      setLoading(false)
      alert("Error has occured")
    }
  }

  const removeBookFromList = (id)=>{
    let newBooks = books.filter(b=> b.id !== id)
    setBooks(newBooks)
  }

  const renderBooks = ()=>{
    if(loading){
      return <p>Loading Books</p>
    }
    
    return books.map(b=> <Book removeBookFromList={removeBookFromList} key={b.id} {...b} />)
  }

  return (
    <div>
      <h1>Books</h1>
      {renderBooks()}
    </div>
  )
}

export default Books