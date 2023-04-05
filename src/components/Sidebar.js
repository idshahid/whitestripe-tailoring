import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ openMenu, setOpenMenu }) => {
    const location = useLocation()
    useEffect(() => {
        setOpenMenu(false)
    }, [location]);
    return (
        <>
            <div className={openMenu === true ? 'bg-black bg-opacity-90 h-screen w-screen z-2000 flex justify-center items-center fixed top-0 left-0 duration-500' : ' duration-500 bg-black bg-opacity-90 h-screen w-screen z-2000 flex justify-center items-center fixed top-0 left-full'}>
                <div className='absolute top-14 right-14 z-50'>
                    <IoClose className='text-white text-2xl font-extrabold cursor-pointer' onClick={() => { setOpenMenu(false) }} />
                </div>
                <div className='flex flex-col justify-center items-center text-white'>
                    <p className='m-2 text-lg'>BOOK YOUR APPOINMENT HERE</p>
                    <Link exact to="/appointment"><button className='mb-6 text-lg border p-2 px-10 accent-button'>BOOK NOW</button></Link>
                    <p className='m-3 text-2xl hover:text-orange-500 duration-200'><Link exact to="/">HOME</Link></p>
                    <p className='m-3 text-2xl'><Link exact to="/dubai" className='hover:text-orange-500 duration-200'>DUBAI</Link> / <Link className='hover:text-orange-500 duration-200' exact to="/abu-dhabi">ABU DHABI</Link></p>
                    <p className='m-3 text-2xl hover:text-orange-500 duration-200'><Link exact to='/fabrics'>FABRICS</Link></p>
                    <p className='m-3 text-2xl hover:text-orange-500 duration-200'><Link exact to='/contact'>CONTACT US</Link></p>
                </div>
            </div>
        </>
    )
}

export default Sidebar