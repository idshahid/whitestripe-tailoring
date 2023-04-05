import axios from 'axios';
import React, { useState } from 'react'
import Footer from '../components/Footer'

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const handleSubmit = () => {
		axios({
			method: 'post',
			url: `https://white-stripe-backend.vercel.app/self-contact`,
			data: {
				email: email,
				name: name,
				message: message
			}
		})
			.then(() => {
				alert("Thank you for your interest in The White Stripes. Our team member will get in touch with within 24 hours.");
			})
			.catch((err) => {
				alert(err.message)
			})
	}
	return (
		<>
			<div className='page-height w-screen absolute top-32 bg-gray-700'>
				<div className='pt-10'>
					<h1 className='lg:block lg:px-44 text-2xl lg:text-4xl pb-10 accent-text-color lg:text-left text-center text-animation-parent'><span className='text-animation'>CONTACT US</span></h1>
					<div className='bg-gray-900 py-9 px-5 lg:px-44'>
						<h1 className='text-white text-2xl text-center Calibri'>REACH US</h1>
						<div className='Raleway text-white lg:text-justify mt-5'>
							We look forward to hearing from you. For general enquiries, please send us an email at delight@whitestripes-tailoring.com. For The White Stripes VIP Experience at your doorstep, please drop us an email at vip.delight@whitestripes-tailoring.com with your contact details and our team will get in touch with you to fix an appointment within 24 hours.
						</div>

						<div className='bg-white py-10 flex mt-10 lg:mt-20 lg:flex-row flex-col'>
							<div className='w-full lg:w-1/2 border-b lg:border-b-0 lg:pb-0 pb-10 lg:border-r text-center border-gray-600'>
								<h1 className='text-gray-800 text-3xl mb-2'>DUBAI</h1>
								<div className='Raleway flex-col flex'>
									<p className='mb-0.5'>THE WHITE STRIPES</p>
									<p>Shop No 7, Lake City Tower</p>
									<p>Cluster D, JLT, Dubai</p>
									<p>United Arab Emirates</p>
									<div className='flex flex-col items-center'>
										<a href="tel:04-5913330">04-5913330</a>
										<a href="tel:050-9016869">050-9016869</a>
										<button className='mt-4 border accent-text-color accent-border-color px-3 py-2 accent-button'><a href="https://goo.gl/maps/GFBY9fYHNGWGZQHJ9">GET DIRECTION</a></button>
									</div>
								</div>
							</div>
							<div className='w-full lg:w-1/2 border-t lg:border-t-0 lg:pt-0 pt-10 lg:border-l text-center border-gray-600'>
								<h1 className='text-gray-800 text-3xl mb-2'>ABU DHABI</h1>
								<div className='Raleway flex-col flex'>
									<p className='mb-0.5'>THE WHITE STRIPES</p>
									<p>Shop No 1, Al Hashemi Building</p>
									<p>Al Dhafra St - Abu Dhabi</p>
									<p>United Arab Emirates</p>
									<div className='flex flex-col items-center'>
										<a href="tel:02-8865399">02-8865399</a>
										<a href="tel:050-9016473">050-9016473</a>
										<button className='mt-4 border accent-text-color accent-border-color px-3 py-2 accent-button'><a href="https://goo.gl/maps/eYQffKevbh8qAwky5">GET DIRECTION</a></button>
									</div>
								</div>
							</div>
						</div>

						<div className='w-full h-full py-6 px-3 text-white mt-10'>
							<div>
								<label className="cursor-pointer Raleway">Full Name:</label>
								<input type="text" onChange={(e) => { setName(e.target.value) }} value={name} className='text-gray-800 Raleway mt-1 w-full px-3 lg:px-6 font-bold py-2 border rounded-lg bg-white outline-none' placeholder='Enter Your Name' />
							</div>
							<div className='mt-6'>
								<label className="cursor-pointer Raleway">Email:</label>
								<input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className='text-gray-800 Raleway mt-1 w-full px-3 lg:px-6 font-bold py-2 border rounded-lg bg-white outline-none' placeholder='Enter Your Email' />
							</div>
							<div className='mt-6'>
								<label className="cursor-pointer Raleway">Message:</label>
								<textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className='resize-none h-32 text-gray-800 Raleway mt-1 w-full px-3 lg:px-6 font-bold py-2 border rounded-lg bg-white outline-none' placeholder='Enter Your Message'></textarea>
							</div>
							<div className="flex justify-center">
								<button onClick={handleSubmit} className="px-3 py-1 rounded-md mt-3 text-white font-bold Raleway accent-button">Submit</button>
							</div>
						</div>
					</div>
				</div>
				<Footer appointment={false} vipexperience={true} />
			</div>
		</>
	)
}

export default Contact