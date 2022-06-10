import './App.css';
import Home from "./Home";
import Tvshow from "./Tvshow";
import Book from "./Book";
import BookForm from "./BookForm";
import BookShow from "./BookShow";
import BookWrapper from "./BookWrapper";
import Movie from "./Movie";

export default function App() {
  return (
    <Routes>
      <Route element={<PageWraper />}>
        <Route index element={<Home />} />
        <Route path="/tvshow" element={<Tvshow />} />
        <Route path="/book" element={<Book />}>
          <Route index element={<Book />} />
          <Route path="/book/new" element={<Book />} />
          <Route path="/book/edit/:id" element={<Book />} />
          <Route path="/book/:id" element={<Book />} />
        </Route>
        <Route path="/movie" element={<Movie />} />
      </Route>
    </Routes>
  );
}