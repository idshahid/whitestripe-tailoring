import React, { useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ setOpenMenu }) => {
  const navRef = useRef()
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset >= 30) {
        navRef.current.style.backgroundColor = "rgba(17, 24, 39, 1)";
      } else {
        navRef.current.style.backgroundColor = "rgba(17, 24, 39, 0.3)";
      }
    })
  }, []);

  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);
  return (
    <>
      <div ref={navRef} className='duration-300 bg-opacity-30 bg-gray-900 h-32 w-screen flex justify-between fixed items-center px-16 z-1000'>
        <div></div>
        <Link to="/"><img src="/Assets/logo.png" className='lg:h-20 h-16' alt="" /></Link>
        <FaBars className='lg:static relative left-4 text-white h-7 cursor-pointer' onClick={() => { setOpenMenu(true) }} />
      </div>
    </>
  )
}

export default Navbar