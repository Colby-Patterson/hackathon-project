import axios from "axios"
import { useState } from "react"



const UpdateTvshowForm = (props)=>{
    const [name, setName] = useState(props.name)
    const [quote, setQuote] = useState(props.quote)
    const [releasedate, setReleasedate] = useState(props.releasedate)


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
          let res = await axios.put(`/api/tvshows/${props}`,{name, quote, releasedate})
          console.log(res)
          props.updateTvshow(res.data)
        } catch(err){
          console.log(err)
        }

    } 

    
    return (
        <div>
            <h1>Update Tv Show Form</h1>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>Quote</p>
                <input value={quote} onChange={(e)=>setQuote(e.target.value)}/>
                <p>Releasedate</p>
                <input value={releasedate} onChange={(e)=>setReleasedate(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
    )
   
    
}
export default UpdateTvshowForm