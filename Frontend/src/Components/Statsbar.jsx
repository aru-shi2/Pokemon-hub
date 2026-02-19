import React from 'react'
import { useEffect,useState } from 'react'

const Statsbar = ({progress}) => {
    const [p, setp] = useState(0)
    useEffect(() => {
      setTimeout(() => {
        setp(progress)
      }, 100);
    }, [progress])
    

  return (
    <div className="outer border w-full overflow-hidden">
        <div style={{transform:`translateX(${p-100}%)`}} className="inner h-full bg-amber-300 transition-all duration-500 ease-in">
        </div>
    </div>
  )
}

export default Statsbar
