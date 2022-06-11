import './App.css';
import Home from "./Home";
import Tvshows from "./Tvshows";
import Books from "./Books";
import BookForm from "./BookForm";
import BookShow from "./BookShow";
import BookWrapper from "./BooksWrapper";
import Movies from "./Movies/Movies";
import PageWraper from './PageWraper';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route element={<PageWraper />}>
        <Route index element={<Home />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/books" element={<BookWrapper />}>
          <Route index element={<Books />} />
          <Route path="/books/new" element={<BookForm />} /> */
          <Route path="/books/edit/:id" element={<BookForm />} />
          <Route path="/books/:id" element={<BookShow />} /> */
        </Route>
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}