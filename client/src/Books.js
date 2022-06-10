import { Link } from "react-router-dom"

const Model2 = () => {
  return (
    <div>
      <h1>Model 2</h1>
      <Link to="/book/edit/1">Update Book1</Link>
      <Link to="/book/1">Show Book1</Link>
      <hr />
      <Link to="/book/edit/2">Update Book2</Link>
      <Link to="/book/2">Show Book2</Link>
    </div>
  )
}