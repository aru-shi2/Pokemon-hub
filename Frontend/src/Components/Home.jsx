import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();

const [List, setList] = useState([])
const [Next, setNext] = useState([])
const [Input, setInput] = useState("")
const [New, setNew] = useState([])

  async function fetchdata() {
    const res=await axios.get(`https://api-pokedex-qhm5.onrender.com`);
    console.log(res.data.msg.results)
    setList(res.data.msg.results)
  }
  useEffect(() => {
   fetchdata();
  },[])

  function click(id) {
    navigate(`/info/${id}`)
  }

  async function next() {
    const res=await axios.get(`https://api-pokedex-qhm5.onrender.com/next`);
    console.log(res.data.msg.results)
    setNext(res.data.msg.results)
  }

  async function prev(){
    setNext([]);
  }

  async function search() {
    const res=await axios.get(`https://api-pokedex-qhm5.onrender.com/pokemon?search=${Input}`);
    console.log(res.data.msg.results)
    setNew(res.data.msg.results)
  }

  useEffect(() => {
    if(Input.length>0){
    search()
    }
  }, [Input])
  
  const listrender=Input?.length>0?New:Next.length>0?Next:List

  return (
    <div>
      <div className="content min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-white p-6">
  
  <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 
                 bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600 
                 bg-clip-text text-transparent drop-shadow-sm tracking-wider">
    Pokédex
  </h1>

  <div className="search flex justify-center mb-10">
    <div className="flex w-full max-w-xl bg-white shadow-lg rounded-full overflow-hidden border-2 border-yellow-400">
      <input 
      value={Input}
      onChange={()=>setInput(e.target.value)}
        type="text" 
        placeholder='Search here...' 
        className="flex-1 px-5 py-3 outline-none text-gray-700 placeholder-gray-400 font-medium"
      />
      <button className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 px-6 font-semibold text-black">
        Search
      </button>
    </div>
  </div>

  <div className="cards">
    <div className="card grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {listrender.map((p)=>{
        const id=p.url.split("/").filter(Boolean).pop();
        return (
          <div onClick={()=>click(id)}
            key={p.name}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-5 flex flex-col items-center text-center border border-yellow-200"
          >
            <div className="bg-yellow-100 rounded-full p-4 mb-4 group-hover:bg-yellow-200 transition">
              <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                alt="" 
                className="w-24 h-24 object-contain drop-shadow-lg"
              />
            </div>

            <p className="capitalize font-bold text-lg text-gray-800 tracking-wide font-sans">
              {p.name}
            </p>

            <p className="text-sm text-gray-500 mt-1 font-medium">
              #{id}
            </p>
          </div>
        )
      })}
    </div>
  </div>
</div>
<div className="btns flex justify-between p-6">
<button onClick={prev} className='className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 px-6 font-semibold text-black bg-amber-200 h-13 rounded-2xl'>Previous</button>
<button onClick={next} className='className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 px-6 font-semibold text-black bg-amber-200 h-13 rounded-2xl'>Next</button>
</div>
    </div>
  )
}

export default Home
