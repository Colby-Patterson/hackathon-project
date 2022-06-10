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
        <Route path="/book" element={<BookWrapper />}>
          <Route index element={<Book />} />
          <Route path="/book/new" element={<BookForm />} />
          <Route path="/book/edit/:id" element={<BookForm />} />
          <Route path="/book/:id" element={<BookShow />} />
        </Route>
        <Route path="/movie" element={<Movie />} />
      </Route>
    </Routes>
  );
}