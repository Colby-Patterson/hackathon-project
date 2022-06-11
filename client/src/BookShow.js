import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Book from "./Book"

const BookShow = () => {
  const {id} = useParams()
  const [book, setBook] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    getBook()
  }, [])

  const getBook = async () => {
    try {
      let res = await axios.get(`/api/books/${id}`)
      setBook(res.data)
    } catch(err) {
      alert("Error has occured")
    }
  }

  const renderBook = () => {
    return (
      <Book {...book} />
    )
  }

  return (
    <div>
      <h1>BookShow</h1>
      {renderBook()}
      <Link to="/books">Back to books</Link>
    </div>
  )
}

export default BookShow