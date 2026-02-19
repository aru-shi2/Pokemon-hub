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
      console.log(res.data.msg)
      setData(res.data.msg)
    }
    useEffect(() => {
     fetchdata();
    },[id])
  return (
    <div>
      {!Data&&<p>Loading...</p>}
{Data && <div className="main w-full">
  <div className="top">
    <h1>{Data.name}</h1>
    <h1>{Data.id}</h1>
  </div>
  <div className="image">
    <img src={Data.sprites.front_default} alt="" />
  </div>
  <div className="about">
    <h2>About</h2>
    <div className="first">
      <p>Species: </p>
      <p>{Data.species.name}</p>
    </div>

    <div className="second">
      <p>Height: </p>
      <p>{Data.height}</p>
    </div>

    <div className="third">
      <p> Weight: </p>
      <p>{Data.weight}</p>
    </div>
    
    <div className="abilities">
      <p>Abilities: </p>
      <ul>
        {Data.abilities.map((i)=>(
        <li key={Data.id}>{i.ability.name}</li>
      ))}
      </ul>
    </div>
  </div>

  <div className="stats">
    <h2>Base Stats</h2>
     {Data.stats.map((i)=>(
        <div className='flex gap-10' key={Data.id}>
          <p>{i.stat.name}</p>
          <div className='flex w-full'>
            <div>{i.base_stat}</div>
            <Statsbar progress={i.base_stat}/>
            </div>
        </div>

      ))}
  </div>
</div>
}
    </div>
  )
}

export default Info
