import React from 'react'
import { LuUsers2, LuUserCheck } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";
import Cards from '../assets/Cards'
import { useNavigate } from 'react-router-dom';

function DashBord() {
    const navigate = useNavigate()

    const items = [
        { icon:<LuUsers2/>, title:"Sub Userse", style:"bg-red-500", path:'/subuser'},
        { icon:<LuUserCheck/>, title:"Sub Userse", style:"bg-blue-500"},
        { icon:<FaRegFileLines/>, title:"Sub Userse", style:"bg-orange-500"},
        { icon:<LuUsers2/>, title:"Sub Userse", style:"bg-green-500"},
    ]
    const handleCardClick = (path) => {
        navigate(path);
      };
  return (
    <div className='bg-slate-100'>
      <div className="container mx-auto py-8">
        <div className='p-3'>
        <div>
            <p className='text-gray-500 font-medium text-xs'>OVERVIEW</p>
            <h1 className='font-medium text-lg'>Dashboard</h1>
        </div>
        <div className='flex justify-center items-center'>
            <h1 className='font-medium text-lg'>Hi <span className='text-red-500 text-xl font-bold'>Demo Admin,</span>  Welcome to Ametzo One Demo.</h1>
        </div>
        </div>
      <hr className="w-full border-gray-300 my-8"/>

        
      <div className="flex flex-wrap -mx-4">
        {items.map((card, index) => (
          <Cards key={index} title={card.title} icon={card.icon} style={card.style} handleNavigate={()=>handleCardClick(card.path)}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default DashBord
