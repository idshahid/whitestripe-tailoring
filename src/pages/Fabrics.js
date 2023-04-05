import React from 'react'
import Footer from '../components/Footer'

const Fabrics = () => {
	return (
		<>
			<div className='page-height w-screen absolute top-32 bg-gray-700'>
				<div className='pt-10'>
					<h1 className='lg:block lg:px-44 text-2xl lg:text-4xl pb-10 accent-text-color lg:text-left text-center text-animation-parent'><span className='text-animation'>FABRICS</span></h1>
					<div className='bg-gray-900 py-9 px-5 lg:px-44'>
						<div className='w-full h-full py-6 px-3 text-center text-white flex items-center flex-col'>
							<h1 className='text-2xl lg:text-3xl Calibri'>FIND YOUR FABRICS</h1>
							<p className='text-justify lg:text-center tracking-wider w-full lg:w-10/12 text-sm Raleway mb-6 text-gray-300 mt-4'>Deciding on the right fabric is an important decision when it comes to buying a suit. If you are looking for the world's finest fabrics under one roof, White Stripes is the right place to find it in Abu Dhabi & Dubai.</p>
							<p className='text-justify lg:text-center tracking-wider w-full lg:w-10/12 text-sm Raleway mb-6 text-gray-300'>For suitings, we have iconic fabric brands like Dormeuil cloth, Ermenegildo Zegna, Loro Piana, Scabal, Harrison, W.Bill, H.Lessor & Sons, Smith Woollen, Fox Brothers & Co, Lanificio Cerruti, Ariston fabrics, Dugdale Bros & Co, Reda, Vitale Barberis Canonico, Huddersfield Cloth and Huddersfield Fine Worsted. For shirtings, we have Soktas bespoke, Thomas Mason, Tessitura Monti, Alumo, Mileta and S.I.C.Tess among others</p>
							<p className='text-justify lg:text-center tracking-wider w-full lg:w-10/12 text-sm Raleway mb-6 text-gray-300'>White Stripes has an exclusive collection of hand- sewn, classic Quaranta Locatelli ties in perfect Italian style. The distinctive garment of Quaranta Locatelli seven-fold ties adds elegance to men's clothing according to the Neapolitan tradition.</p>
						</div>
					</div>
					<div className='bg-gray-700 py-9 px-5 lg:px-44'>
						<div className='mt-5 lg:mt-10 w-full h-full py-6 text-center text-white flex items-center flex-col'>
							<h1 className='text-3xl'>SUITINGS</h1>
							<div className='hidden grid-cols-1 lg:grid-cols-4 gap-10 mt-10'>
								<div className='p-3 bg-white w-full'>
									<img className='h-32 w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='p-3 bg-white w-full'>
									<img className='h-32 w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='p-3 bg-white w-full'>
									<img className='h-32 w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='p-3 bg-white w-full'>
									<img className='h-32 w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='p-3 bg-white w-full'>
									<img className='h-32 w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
							</div>
						</div>
						<div className='px-10 lg:px-20 mt-10 bg-gray-900 w-full py-8 text-center text-white'>
							<h1 className='text-3xl'>SHIRTINGS</h1>
							<div className='mt-8 hidden grid-cols-1 lg:grid-cols-5 gap-8'>
								<div className='flex items-center justify-center p-3 bg-white w-full'>
									<img className='h-28 lg:h-24 w-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='flex items-center justify-center p-3 bg-white w-full'>
									<img className='h-28 lg:h-24 w-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='flex items-center justify-center p-3 bg-white w-full'>
									<img className='h-28 lg:h-24 w-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='flex items-center justify-center p-3 bg-white w-full'>
									<img className='h-28 lg:h-24 w-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='flex items-center justify-center p-3 bg-white w-full'>
									<img className='h-28 lg:h-24 w-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
								<div className='flex items-center justify-center p-3 bg-white w-full'>
									<img className='h-28 lg:h-24 w-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/300px-Abu_dhabi_skylines_2014.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer appointment={false} vipexperience={true} />
			</div>
		</>
	)
}

export default Fabrics