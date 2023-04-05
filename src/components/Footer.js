import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = ({ appointment, vipexperience }) => {

	const navigate = useNavigate()
	return (
		<>
			<div>
				<div className={appointment ? 'footer-color py-16 w-screen text-white text-center' : 'hidden'}>
					<h1 className='text-4xl'>BOOK YOUR APPOINTMENT NOW</h1>
					<p className='Raleway text-sm mt-3'>Our clothes are tailored for the posture and the purpose.</p>
					<button onClick={() => { navigate('/appointment') }} className='mt-5 border accent-text-color accent-border-color px-3 py-2 accent-button'>BOOK NOW</button>
				</div>
				<div className={vipexperience ? 'bg-gray-900 py-16 w-screen text-white text-center px-4 lg:px-44 flex flex-col items-center border-b  border-gray-800' : 'hidden'}>
					<h1 className='text-3xl lg:text-4xl'>VIP EXPERIENCE</h1>
					<p className='text-justify lg:text-center Raleway text-sm mt-3 w-11/12'>The White Stripes VIP Experience is designed for our premium customers. If you would like us to come to you, our service team and our experienced master tailor will visit your home or office in Abu Dhabi and Dubai city area as you find convenient. You will be able to choose every detail including fabric, styling, lining and trims.</p>
					<p className='text-justify lg:text-center Raleway text-sm w-11/12 mt-4 lg:mt-0'>Please drop us an email on <a className='accent-text-color' href="mailto:delight@whitestripes-tailoring.com">delight@whitestripes-tailoring.com</a> with your contact details and our team will get in touch with you to fix an appointment within 24 hours.</p>
				</div>
				<div className='bg-gray-900 pt-16 pb-5 w-screen text-white text-center px-5 lg:px-44 flex flex-col items-center border-b border-gray-800'>
					<img src="/Assets/logo.png" className='h-16 lg:h-24' alt="" />
					<p className='mt-10 lg:mt-5 text-sm w-11/12'><Link className='accent-text-color' to="/dubai">DUBAI</Link> &nbsp; <Link className='accent-text-color' to="/abu-dhabi">ABU DHABI</Link> &nbsp; <Link className='accent-text-color' to="/fabrics">FABRICS</Link> &nbsp; <Link className='accent-text-color' to="/contact">CONTACT</Link></p>
					<p className='Raleway mt-4 w-11/12'><Link className='accent-text-color' to="/terms-and-conditions">Terms and Conditions</Link></p>
				</div>
				<div className='bg-gray-900 py-7 w-screen text-white text-center px-10 lg:px-44 flex flex-col items-center border-b border-gray-800'>
					<p className='Raleway text-xs text-center text-gray-500'>© 2022 The White Stripes Tailors & Fabrics. All Rights Reserved.</p>
				</div>
			</div>
		</>
	)
}

export default Footer