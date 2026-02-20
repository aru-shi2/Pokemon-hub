import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Statsbar from './Statsbar'

const Info = () => {
  const {id}=useParams();

  const [Data, setData] = useState(null)
  async function fetchdata() {
    const res=await axios.get(`http://localhost:3000/info/${id}`);
    setData(res.data.msg)
  }
  useEffect(() => { fetchdata(); },[id])

  return (
    <div className="min-h-screen bg-yellow-100 p-4 md:p-10 flex justify-center">
      {!Data && <p className="text-center text-xl font-medium text-yellow-700">Loading...</p>}
      {Data && <div className="main w-full max-w-5xl bg-white rounded-xl border border-yellow-200 hover:shadow-xl transition duration-300">

        <div className="top px-6 md:px-10 py-6 border-b border-yellow-200 flex justify-between items-center bg-yellow-50">
          <h1 className="text-3xl md:text-4xl font-bold capitalize text-gray-800">
            {Data.name}
          </h1>
          <h1 className="text-lg md:text-xl font-semibold text-yellow-600">
            #{Data.id}
          </h1>
        </div>

        <div className="about px-6 md:px-10 py-10 grid md:grid-cols-2 gap-10">

         <div className="image bg-linear-to-br to-yellow-200 from-amber-100 rounded-lg flex justify-center items-center py-12 transition duration-300 hover:from-yellow-200 hover:to-amber-100"> <img src={Data.sprites.other["official-artwork"].front_default} alt="" className="w-60 object-contain transition duration-300 hover:scale-105" /> </div>


          <div>
            <h2 className=" text-xl md:text-2xl font-semibold px-2 pt-2 pb-2 mb-6 text-gray-800">
              About
            </h2>

            <div className="first flex justify-between py-3 border-b border-gray-300 hover:bg-yellow-50 transition px-2 rounded text-base md:text-xl">
              <p className="text-gray-700">Species</p>
              <p className="capitalize font-medium text-gray-800">{Data.species.name}</p>
            </div>

            <div className="second flex justify-between py-3 border-b border-gray-300 hover:bg-yellow-50 transition px-2 rounded text-base md:text-lg">
              <p className="text-gray-700">Height</p>
              <p className="font-medium text-gray-800">{Data.height}</p>
            </div>

            <div className="third flex justify-between py-3 border-b border-gray-300 hover:bg-yellow-50 transition px-2 rounded text-base md:text-lg">
              <p className="text-gray-700">Weight</p>
              <p className="font-medium text-gray-800">{Data.weight}</p>
            </div>

            <div className="abilities mt-10">
              <p className="text-lg md:text-xl font-bold text-gray-800 mb-6">
                Abilities
              </p>
              <ul className="flex flex-wrap gap-3">
                {Data.abilities.map((i,index)=>(
                  <li key={index} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-md text-sm md:text-lg font-medium capitalize hover:bg-yellow-200 hover:-translate-y-0.5 transition duration-200 cursor-pointer">
                    {i.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="stats px-6 md:px-10 pb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
            Base Stats
          </h2>

          {Data.stats.map((i,index)=>(
            <div className='flex flex-col gap-2 mb-4 hover:bg-yellow-50 p-2 rounded transition' key={index}>
              <div className="flex justify-between text-sm md:text-base font-medium capitalize text-gray-600">
                <p>{i.stat.name}</p>
                <p className="text-yellow-600">{i.base_stat}</p>
              </div>
              <div className='flex w-full'>
                <Statsbar progress={i.base_stat}/>
              </div>
            </div>
          ))}

          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-gray-800">
            Moves
          </h2>

          <ul className="moves grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Data?.moves?.slice(0,9).map((m,index)=>(
              <li 
                key={index} 
                className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-md text-sm md:text-base text-center capitalize font-medium hover:bg-yellow-200 hover:-translate-y-0.5 transition duration-200 cursor-pointer"
              >
                {m.move.name}
              </li>
            ))}
          </ul>
        </div>

      </div>}
    </div>
  )
}

export default Info;
