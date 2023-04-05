import React, { useState } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'

const Appointment = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [location, setLocation] = useState("");
	const handleSubmit = () => {
		axios({
			method: 'post',
			url: `https://white-stripe-backend.vercel.app/self-appointment`,
			data: {
				email: email,
				name: name,
				phonenumber: mobileNumber,
				location: location
			}
		})
			.then(() => {
				alert("Thank you for your interest in The White Stripes. You've made the right choice. Our team member will get in touch with within 24 hours to discuss your appointment");
			})
			.catch((err) => {
				alert(err.message)
			})
	}
	return (
		<>
			<div className='w-screen absolute top-32 main-bg-accent'>
				<div className='pt-10'>
					<h1 className='lg:block lg:px-44 text-2xl lg:text-4xl pb-10 accent-text-color lg:text-left text-left px-5 text-animation-parent'><span className='text-animation'>BOOK APPOINTMENT</span></h1>
					<div className='main-bg-accent py-9 px-5 lg:px-44'>
						<div className='w-full h-full py-6 px-3 text-left text-white flex flex-col'>
							<h1 className='text-2xl lg:text-3xl Calibri'>FINEST BESPOKE TAILORS EXPERIENCE</h1>
							<p className='text-justify lg:text-left tracking-wider w-full text-sm Raleway mb-6 text-gray-300 mt-4'>Looking for the finest bespoke tailoring experience for your next suit in Dubai or Abu Dhabi? You've reached the right place. We are the masters of fine tailoring for men in UAE. A visit to your nearest store and a coffee with our master stylist will help you understand why we are considered one of the best in the UAE.</p>
							<p className='text-justify lg:text-left tracking-wider w-full text-sm Raleway mb-6 text-gray-300'>Welcome to the The White Stripes appointment booking page. An appointment is not mandatory and you can walk in any time. Having said that, sometimes we get busy especially during weekends. An appointment will save your time, which you can spend with your loved ones!</p>
						</div>
						<div className='flex flex-col lg:flex-row w-full items-center'>
							<div className='w-full lg:w-1/2 lg:p-10 p-0 mb-10 lg:mb-0'>
								<div className='bg-gray-900 p-10'>
									<div className='flex flex-col'>
										<label htmlFor="" className='Raleway text-white mb-1'>Name</label>
										<input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Enter Your Name' className='px-3 py-2 bg-white rounded-md outline-none' />
									</div>
									<div className='flex flex-col mt-5'>
										<label htmlFor="" className='Raleway text-white mb-1'>Mobile Number</label>
										<input value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} type="text" placeholder='Enter Your Mobile Number' className='px-3 py-2 bg-white rounded-md outline-none' />
									</div>
									<div className='flex flex-col mt-5'>
										<label htmlFor="" className='Raleway text-white mb-1'>Email Address</label>
										<input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='Enter Your Email Address' className='px-3 py-2 bg-white rounded-md outline-none' />
										<p className='font-semibold mt-1 text-xs text-gray-300 Raleway'>We'll never share your details with anyone else.</p>
									</div>
									<div className='flex mt-5'>
										<div className='flex items-center'>
											<input type="radio" onClick={() => { setLocation("Dubai") }} name="place" placeholder='Enter Your Email Address' className='px-3 py-2 bg-white rounded-md outline-none' />
											<label htmlFor="" className='ml-2 Raleway text-white mb-1'>Dubai</label>
										</div>
										<div className='flex items-center ml-3'>
											<input type="radio" onClick={() => { setLocation("Abu Dhabi") }} name="place" placeholder='Enter Your Email Address' className='px-3 py-2 bg-white rounded-md outline-none' />
											<label htmlFor="" className='ml-2 Raleway text-white mb-1'>Abu Dhabi</label>
										</div>
									</div>
									<button onClick={handleSubmit} className='text-lg border border-red-600 p-2 px-10 text-white mt-5 accent-button'>BOOK NOW</button>
								</div>
							</div>
							<div className='w-full lg:w-1/2'>
								<h1 className='mb-6 text-white text-3xl Calibri'>VIP EXPERIENCE</h1>
								<p className='Raleway font-normal text-gray-100'>The White Stripes VIP Experience is designed for our premium customers. If you would like us to come to you, our service team and our experienced master tailor will visit your home or office in Abu Dhabi and Dubai city area as you find convenient. You will be able to choose every detail including fabric, styling, lining and trims. Please drop us an email on delight@whitestripes-tailoring.com with your contact details and our team will get in touch with you to fix an appointment within 24 hours.</p>
							</div>
						</div>
					</div>
				</div>
				<Footer appointment={false} vipexperience={false} />
			</div>
		</>
	)
}

export default Appointment