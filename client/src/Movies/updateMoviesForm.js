import axios from "axios"
import { useState } from "react"

const UpdateMoviesForm = (props) => {
    const [name, setName] = useState(props.name)
    const [releasedate, setReleasedate] = useState(props.releasedate)
    const [quote, setQuote] = useState(props.quote)
    let [show, setShow] = useState(false)

    const handleSubmit = async (r) => {
        r.preventDefault();
        try {
            let res = await axios.put(`/api/movies/${props.id}`, {
                name,
                releasedate,
                quote,
            });
            console.log(res);
            props.updateMovies(res.data)
        } catch (err) {
            console.log(err)
        }
    };


    return (
        <div className="something">
            <button onClick={() => setShow(!show)}>Edit</button>
            {show && (
                <>
                    <p>Form</p>
                    <form onSubmit={handleSubmit}>
                        <p>Title</p>
                        <input value={name} onChange={(r) => setName(r.target.value)} />
                        <p>Release Date</p>
                        <input value={releasedate} onChange={(r) => setReleasedate(r.target.value)} />
                        <p>Quotes</p>
                        <input value={quote} onChange={(r) => setQuote(r.target.value)} />
                        <button>Save changes</button>
                    </form>
                </>
            )}
        </div>
    )
}
export default UpdateMoviesForm