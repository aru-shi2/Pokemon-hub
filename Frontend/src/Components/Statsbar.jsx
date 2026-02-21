import React from 'react'
import { useEffect,useState } from 'react'

const Statsbar = ({progress}) => {
    const [p, setp] = useState(0)
    useEffect(() => {
      setTimeout(() => {
        setp((progress/140)*100)
      }, 100);
    }, [progress])


  return (
    <div className="outer w-full h-2 md:h-4 lg:h-5 border border-amber-500 rounded-full overflow-hidden bg-yellow-50">
        <div 
          style={{transform:`translateX(${p-100}%)`}} 
          className="inner h-full bg-amber-200 transition-all duration-500 ease-in"
        >
        </div>
    </div>
  )
}

export default Statsbar
