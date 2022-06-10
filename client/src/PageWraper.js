import { Link, Outlet } from "react-router-dom";

const PageWraper = () => {
  return (
    <div className="app-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/tvshow">Tvshow</Link>
        <Link to="/books">Books</Link>
        <Link to="/movie">Movie</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PageWraper;