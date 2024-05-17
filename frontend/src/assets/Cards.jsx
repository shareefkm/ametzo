import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cards({ title, icon, handleNavigate, style }) {
    
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className={`${style} rounded-lg shadow-md p-2 flex flex-col justify-center items-center text-white cursor-pointer`} onClick={handleNavigate}>
        <p className='text-4xl'>{icon}</p>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      </div>
    </div>
  )
}

export default Cards
