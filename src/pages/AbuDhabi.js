import React from 'react'
import Footer from '../components/Footer'

const AbuDhabi = () => {
	return (
		<>
			<div className='w-screen absolute top-32 main-bg-accent'>
				<div className='pt-10'>
					<h1 className='lg:block lg:px-44 text-2xl lg:text-4xl pb-20 accent-text-color lg:text-left text-center text-animation-parent'><span className='text-animation'>STORES - ABU DHABI</span></h1>
					<div className='h-7 w-screen bg-transparent lg:bg-white relative'>
						<div className='lg:mt-0 mt-10 text-white items-center flex flex-col justify-center text-center absolute h-40 w-full lg:w-10/12 bg-transparent lg:bg-gray-900 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
							<h1 className='text-2xl Calibri'>ABU DHABI</h1>
							<p className='px-5 lg:px-10 text-sm w-full lg:w-9/12 mt-3 Raleway text-justify lg:text-center'>The White Stripes Abu Dhabi store is conveniently located in the heart of Abu Dhabi. With ample parking and relaxed ambience, our stores are designed to allure you and help you browse through the collection before making your selection.</p>
						</div>
					</div>
					<div className='pt-44 main-bg-accent pb-16'>
						<h1 className='text-center text-white text-2xl lg:text-4xl Calibri'>GALLERY</h1>
						<div className='pt-4'>
							<div className='m-auto grid lg:grid-cols-3 w-10/12 lg:gap-y-10 grid-cols-1 gap-y-6'>
								<div style={{padding: '0.1rem'}} className='ease-out cursor-pointer hover:scale-110 duration-500 w-max bg-white m-auto shadow-2xl'><img className="m-auto h-40 aspect-video" src="/Assets/Dubai/01.jpg" alt="" /></div>
								<div style={{padding: '0.1rem'}} className='ease-out cursor-pointer hover:scale-110 duration-500 w-max bg-white m-auto shadow-2xl'><img className="m-auto h-40 aspect-video" src="/Assets/Dubai/02.jpg" alt="" /></div>
								<div style={{padding: '0.1rem'}} className='ease-out cursor-pointer hover:scale-110 duration-500 w-max bg-white m-auto shadow-2xl'><img className="m-auto h-40 aspect-video" src="/Assets/Dubai/03.jpg" alt="" /></div>
								<div style={{padding: '0.1rem'}} className='ease-out cursor-pointer hover:scale-110 duration-500 w-max bg-white m-auto shadow-2xl'><img className="m-auto h-40 aspect-video" src="/Assets/Dubai/04.jpg" alt="" /></div>
								<div style={{padding: '0.1rem'}} className='ease-out cursor-pointer hover:scale-110 duration-500 w-max bg-white m-auto shadow-2xl'><img className="m-auto h-40 aspect-video" src="/Assets/Dubai/05.jpg" alt="" /></div>
								<div style={{padding: '0.1rem'}} className='ease-out cursor-pointer hover:scale-110 duration-500 w-max bg-white m-auto shadow-2xl'><img className="m-auto h-40 aspect-video" src="/Assets/Dubai/06.jpg" alt="" /></div>
							</div>
						</div>
					</div>
					<div className='bg-gray-900 py-9 px-5 lg:px-44'>
						<div className='w-full h-full py-6 px-3 text-center text-white'>
							<h1 className='text-2xl lg:text-3xl'>LOCATION</h1>
							<p className='Raleway mb-0.5 mt-6 lg:mt-4'>THE WHITE STRIPES</p>
							<p className='Raleway mb-0.5'>Shop No 1, Al Hashemi Building, Al Dhafra St - Abu Dhabi</p>
							<p className='Raleway mb-0.5'>United Arab Emirates</p>
							<div className='flex flex-col items-center'>
								<p className='Raleway mt-2 text-xl mb-2'><a href="tel:(+971) 02-8865399">(+971) 02-8865399</a></p>
								<p className='Raleway mt-2 text-xl mb-2'><a href="tel:(+971) 050-9016473">(+971) 050-9016473</a></p>
							</div>
							<p className='Raleway'><a href="mailto:delight@whitestripes-tailoring.com">delight@whitestripes-tailoring.com</a></p>
						</div>
					</div>
				</div>
				<Footer appointment={true}/>
			</div>
		</>
	)
}

export default AbuDhabi