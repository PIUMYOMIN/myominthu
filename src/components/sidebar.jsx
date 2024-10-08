import React from 'react'
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaAlignRight, FaHome, FaUser, FaUserCog, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Profile from '../assets/Profile.png'

export default function ()
 {
  const [open, setOpen] = useState(true);
  const [menu, setMenu] = useState(false);
  return <div>
      <div className={`bg-dark-purple text-tahiti h-screen p-5 pt-8 lg:mt-0 ${open ? "lg:w-72" : "w-20"} ${menu ? "md:mt-0 w-full" : "mt-[-100%] w-full"} duration-300 z-10 lg:relative absolute`}>
        <div className="lg:block hidden">
          <BsFillArrowLeftCircleFill className={`bg-dark-purple text-white rounded-full text-2xl text-tahiti absolute -right-2 top-20 cursor-pointer ${!open && "rotate-180"} duration-500`} onClick={() => setOpen(!open)} />
        </div>
        <div className="inline-flex items-center truncate">
          <img src={Profile} alt="Myo Min Thu" className="block float-left mr-2 w-14 rounded-full object-cover" />
          <h1
            className={`text-white origin-left font-medium text-2xl ${open
              ? "block"
              : "hidden"}`}
          >
            Myo Min Thu
          </h1>
        </div>
        <ul className="pt-2">
          <li className={`flex items-center text-white gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-dark ${open ? "rounded-md" : "rounded-full justify-center"} mt-2`}>
            <Link to="/" className="w-full">
              <div className={`flex items-center gap-2 ${!open && "gap-2"}`}>
                <FaHome className={`hover:bg-white hover:text-dark text-xl ${!open && "hover:rounded-full"}`} /> <span className={`block text-black ${!open && "hidden"}`}>Home</span>
              </div>
            </Link>
          </li>
          {/* <li className={`flex items-center text-white gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-dark ${open ? "rounded-md" : "rounded-full justify-center"} mt-2`}>
            <Link to="about" className="w-full">
              <div className={`flex items-center gap-2 ${!open && "gap-2"}`}>
                <FaUser className={`hover:bg-white hover:text-dark text-xl ${!open && "hover:rounded-full"}`} /> <span className={`block text-black ${!open && "hidden"}`}>About</span>
              </div>
            </Link>
          </li> */}
          <li className={`flex items-center text-white gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-dark ${open ? "rounded-md" : "rounded-full justify-center"} mt-2`}>
            <Link to="skills" className="w-full">
              <div className={`flex items-center gap-2 ${!open && "gap-2"}`}>
                <FaUserCog className={`hover:bg-white hover:text-dark text-xl ${!open && "hover:rounded-full"}`} /> <span className={`block text-black ${!open && "hidden"}`}>Skills</span>
              </div>
            </Link>
          </li>
          <li className={`flex items-center text-white gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-dark ${open ? "rounded-md" : "rounded-full justify-center"} mt-2`}>
            <Link to="services" className="w-full">
              <div className={`flex items-center gap-2 ${!open && "gap-2"}`}>
                <FaHome className={`hover:bg-white hover:text-dark text-xl ${!open && "hover:rounded-full"}`} /> <span className={`block text-black ${!open && "hidden"}`}>Services</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden block flex-inline justify-center items-center absolute right-2 top-3 text-orange-200 z-50">
        <div className={`${menu ? "mt-0" : ""}`} onClick={() => setMenu(!menu)}>
          {menu ? <FaTimes className="w-6 h-6" /> : <FaAlignRight className="w-6 h-6" />}
        </div>
      </div>
    </div>;
}
