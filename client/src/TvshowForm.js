import { useState } from "react"
import axios from 'axios'

const TvshowForm = (props) => {
  const [name, setName] = useState('')
  const [quote, setQuote] = useState('')
  const [releasedate,setReleasedate] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({name, quote, releasedate})
    try {
      let res = await axios.post('/api/tvshows', { name, quote, releasedate})
      props.addTvshow(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Tvshow Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <p>Quote</p>
        <input value={quote} onChange={(e)=>setQuote(e.target.value)} />
        <p>Releasedate</p>
        <input value={releasedate} onChange={(e)=>setReleasedate(e.target.value)} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TvshowForm