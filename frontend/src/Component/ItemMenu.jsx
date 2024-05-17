import React from 'react';
import { LuUsers2, LuUserCheck } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import Cards from '../assets/Cards';
import { useNavigate } from 'react-router-dom';

function ItemMenu({ closeModal }) {
    const navigate = useNavigate()
  const items = [
    { icon:<MdOutlineDashboard/>, title:"Dashboard", style:"bg-slate-500", path:"/"},
    { icon:<LuUsers2/>, title:"Sub Users", style:"bg-red-500", path:"/subuser"},
    { icon:<LuUserCheck/>, title:"Sub Users", style:"bg-blue-500"},
    { icon:<FaRegFileLines/>, title:"Sub Users", style:"bg-orange-500"},
    { icon:<LuUsers2/>, title:"Sub Users", style:"bg-green-500"},
  ];
  const handleCardClick = (path) => {
    closeModal(); 
    navigate(path);
  };

  return (
    <>
      {/* Overlay with reduced opacity */}
      <div className="modal-overlay fixed inset-0 bg-black opacity-20 z-40" onClick={closeModal}></div>
      {/* Modal content */}
      <div className="modal fixed inset-0 flex items-center justify-center z-50 ">
        <div className="modal-content bg-white rounded-lg shadow-lg overflow-hidden w-full md:max-w-2xl">
          <div className="modal-header flex justify-end p-2">
            <button className="modal-close p-2" onClick={closeModal}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M13.06 13.06a1 1 0 0 1-1.41 1.41L9 10.41l-2.65 2.65a1 1 0 1 1-1.41-1.41L7.59 9 4.94 6.35a1 1 0 0 1 1.41-1.41L9 7.59l2.65-2.65a1 1 0 0 1 1.41 1.41L10.41 9l2.65 2.65z"/>
              </svg>
            </button>
          </div>
          <div className="modal-body p-4">
            <div className="flex flex-wrap -mx-4">
              {items.map((card, index) => (
                <Cards key={index} title={card.title} icon={card.icon} style={card.style} handleNavigate={()=>handleCardClick(card.path)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemMenu;
