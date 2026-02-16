import { useState,useEffect } from 'react'
import axios from 'axios'
function App() {
  
  const [List, setList] = useState([])

  async function fetchdata() {
    const res=await axios.get("http://localhost:3000/");
    console.log(res.data.msg.results)
    setList(res.data.msg.results)
  }
  useEffect(() => {
   fetchdata();
  },[])
  
  return (
    <>
      <div className="content">
        <div className="search">
          <input type="text" placeholder='Search here...' />
          <button>Search</button>
        </div>
        <div className="cards">
          <div className="card flex flex-col top-50">
             {List.map((p)=>{
              console.log(p.url)
              const id=p.url.split("/").filter(Boolean).pop();
              console.log(id)
              return (
              <div key={p.name}>
              <p>{p.name}</p>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
              </div>
)
})}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
