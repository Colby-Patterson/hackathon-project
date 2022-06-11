import { Link } from "react-router-dom"

const BookForm = () => {
  // const handleSubmit = asyne (e)=>{
  //   e.preventDefault()

  // }

  return(
    <div>
      <h1>Book Form</h1>
      {/* <form onSubmit={handleSubmit}>

      </form> */}
      <Link to="/books">Back to books</Link>
    </div>
  )
}

export default BookForm