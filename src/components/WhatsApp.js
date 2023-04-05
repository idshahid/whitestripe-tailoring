import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsApp = () => {
	return (
		<>
			<span className='z-2000 text-2xl text-white p-3 bg-green-500 rounded-full fixed bottom-5 right-5 flex items-center justify-center'>
				<a target={'_blank'} href="https://wa.me/+971509016869?text=HelloTWS">
					<BsWhatsapp />
				</a>
			</span>
		</>
	)
}

export default WhatsApp