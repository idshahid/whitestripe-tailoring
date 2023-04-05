import React, { useEffect, useState } from 'react'

const CookiesPopup = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!window.localStorage.getItem('cookie')) {
			setTimeout(() => {
				setOpen(true)
			}, 500);
		}
	}, []);

	return (
		<>
			<div className={open ? 'hidden lg:block duration-1000 Raleway text-white p-6 bg-black bg-opacity-50 fixed bottom-4 right-4 rounded-lg shadow-xl z-2000 lg:w-4/12 text-sm backdrop-blur-md' : 'lg:block backdrop-blur-md hidden duration-1000 Raleway text-white p-6 bg-black bg-opacity-50 fixed bottom-4 -right-full rounded-lg shadow-xl z-2000 lg:w-4/12 text-sm'}>
				<p>Cookies help us deliver our services. By using our website you are agreeing to our use of cookies.</p>
				<p onClick={() => {
					setOpen(false)
					localStorage.setItem('cookie', true)
				}} className='cursor-pointer mt-4 px-3 py-0.5 font-bold rounded-lg bg-white text-black duration-300 hover:bg-black hover:text-white w-max'>OK</p>
			</div>

			<div className={open ? 'lg:hidden duration-1000 Raleway text-white p-6 bg-black bg-opacity-50 fixed bottom-0 shadow-xl z-2000 w-full text-sm backdrop-blur-md' : 'backdrop-blur-md lg:hidden duration-1000 Raleway text-white p-6 bg-black bg-opacity-50 fixed -bottom-full shadow-xl z-2000 w-full text-sm'}>
				<p>Cookies help us deliver our services. By using our website you are agreeing to our use of cookies.</p>
				<p onClick={() => {
					setOpen(false)
					localStorage.setItem('cookie', true)
				}} className='cursor-pointer mt-4 px-3 py-0.5 font-bold rounded-lg bg-white text-black duration-300 hover:bg-black hover:text-white w-max'>OK</p>
			</div>
		</>
	)
}

export default CookiesPopup