import { Link, Outlet } from "react-router-dom"

const BookWrapper = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/books">Show all books</Link>
        <Link to="/books/new">Create new book</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}