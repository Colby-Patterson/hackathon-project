import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TvshowForm from "./TvshowForm";
import UpdatetvshowForm from "./UpdatetvshowForm";

function Tvshows() {
  const [tvshows, setTvshows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTvshows();
  }, []);

  const addTvshow = (tvshow) => {
    setTvshows([tvshow, ...tvshows]);
  };

  const getTvshows = async () => {
    try {
      let res = await axios.get("/api/tvshows");
      console.log("res", res);
      setTvshows(res.data);
      setLoading(false);
    } catch (err) {
      alert("error occured");
      setError(err);
      setLoading(false);
    }
  };

  const deleteTvshow = async (id) => {
    try {
      let res = await axios.delete(`/api/tvshows/${id}`);
      let newTvshows = tvshows.filter((d) => d.id !== res.data.id);
      setTvshows(newTvshows);
    } catch (err) {
      alert("err occured");
    }
  };

  const updateTvshow = (tvshow) => {
    let updatedtvshows = tvshows.map((d) => (d.id === tvshow.id ? tvshow : d));
    setTvshows(updatedTvshows);
  };

  const renderTvshows = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
    return tvshows.map((d) => {
      return (
        <div key={d.id} className="tv">
          <h1>
            {d.name}: {d.quote}: {d.releasedate}
          </h1>
          <button onClick={() => deleteTvshow(d.id)}>delete</button>
          <UpdateTvshowForm {...d} updateTvshow={updateTvshow} />
        </div>
      );
    });
  };

  return (
    <div className="component tvshows">
      <tvshowForm addtvshow={addtvshow} />
      <h1>tvshowes</h1>
      <div>{renderTvshows()}</div>
    </div>
  );
}

export default Tvshows;
