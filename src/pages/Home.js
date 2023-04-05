import React, { useEffect, useRef } from 'react'
import CookiesPopup from '../components/CookiesPopup'
import Footer from '../components/Footer'
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

const Home = () => {

  const mobileVideo = useRef();

  useEffect(() => {
    mobileVideo.current.play()
  }, []);
  return (
    <>
      <CookiesPopup />
      <div className='h-screen w-screen'>
        {/* First Section */}
        <section className='overflow-hidden block lg:hidden h-screen w-screen bg-gray-700 text-white relative'>
          <video src="/Assets/Banner.mp4" ref={mobileVideo} playsInline preload="yes" autobuffer autoPlay loop muted style={{ scale: '4' }} className='overflow-hidden brightness-50 md:scale-100 lg:scale-110 h-screen absolute w-screen top-0 left-0'>
            <source type="video/mp4" />
          </video>
          <div className='w-full lg:w-auto flex lg:block items-center flex-col text-center lg:text-left p-0 lg:px-44 absolute position-top-60'>
            <p className='text-animation-parent accent-text-color text-3xl lg:text-40'><span className='text-animation'>SAY</span>&nbsp;</p>
            <p className='text-3xl lg:text-40 text-animation-parent'><span className='text-animation'>WHO</span>&nbsp;<span className='text-animation'>YOU</span>&nbsp;<span className='text-animation'>ARE</span></p>
            <p className='text-xs mt-1 lg:text-40 tracking-widest'>WITHOUT HAVING TO SPEAK</p>
            <button className='mt-4 border accent-text-color accent-border-color px-3 py-2 accent-button'><a href='#bottom'>FIND STORE</a></button>
          </div>
        </section>


        <section className='hidden lg:block h-screen w-screen bg-gray-700 text-white relative'>
          <video src="/Assets/Banner.mp4" playsInline preload="yes" autobuffer autoPlay loop muted className='object-fill brightness-50 md:scale-100 lg:scale-110 h-screen absolute w-screen top-0 left-0'>
            <source type="video/mp4" />
          </video>
          <div className='w-full lg:w-auto flex lg:block items-center flex-col text-center lg:text-left p-0 lg:px-44 absolute position-top-70'>
            <p className='text-animation-parent accent-text-color text-3xl text-40'><span className='text-animation'>SAY</span></p>
            <p className='text-animation-parent text-3xl text-40'><span className='text-animation'>WHO</span>&nbsp;<span className='text-animation'>YOU</span>&nbsp;<span className='text-animation'>ARE</span></p>
            <p className='mt-1 text-xl tracking-widest'>WITHOUT HAVING TO SPEAK</p>
            <button  className='accent-button mt-4 border accent-text-color accent-border-color px-3 py-2'><a href='#bottom'>FIND STORE</a></button>
          </div>
        </section>

        {/* Second Section */}
        <section className='top-10 relative hidden lg:block page-height w-screen'>
          <div className='flex'>
            {/* left */}
            <div className='w-1/2 bg-gray-900 flex justify-end items-center -z-20 bg-contain bg-center bg-no-repeat'>
              {/* <img src="/Assets/about-left-bg.jpg" alt="" /> */}
              <div className='flex items-center justify-end p-32 page-height bg-no-repeat w-full'  style={{backgroundPositionX: "right", backgroundPositionY: "center", backgroundImage: 'url("https://whitestripes-tailoring.com/Assets/about-left-bg.jpg")' }}>
                <h1 className=' bg-black bg-opacity-40 h-5/6 w-5/6 p-4 text-olive text-3xl Calibri flex items-center'>THE <br/>MASTER OF <br/> FINE TAILORING</h1>
              </div>
            </div>

            {/* right */}
            <div className='z-0 w-1/2 page-height bg-white text-base flex flex-col justify-center px-24'>
              <p className='relative -z-10 my-4 Raleway'>Over the years, The White Stripes Tailors & Shirtmakers has become the fine tailor of choice for gentlemen who like to leave an impression. Along with craftsmanship in fine tailoring, we have set the bar high with our undying passion for perfection, tradition and service.</p>
              <p className='-z-10 relative my-4 Raleway'>At The White Stripes, we are passionate about hand crafting garments that fit your personality and lifestyle. Trust The White Stripes to offer you only the highest quality bespoke suits in town tailored with the finest fabrics from mills around the world.</p>
            </div>
          </div>
        </section>

        <section className='block lg:hidden w-screen bg-cover py-10' style={{ backgroundImage: 'url("https://whitestripes-tailoring.com/Assets/about-left-bg.jpg")' }}>
          {/* <img src="/Assets/about-left-bg.jpg" className='brightness-50 page-height z-0 absolute w-screen bg-cover' alt="" /> */}
          <div className='text-white px-5 z-40 text-base flex flex-col justify-center'>
            <h1 className='text-olive text-2xl mb-3 Calibri mt-5'>THE MASTER OF FINE TAILORING</h1>
            <p className='my-4 Raleway word-spacing-3'>Over the years, The White Stripes Tailors & Shirtmakers has become the fine tailor of choice for gentlemen who like to leave an impression. Along with craftsmanship in fine tailoring, we have set the bar high with our undying passion for perfection, tradition and service.</p>
            <p className='my-4 Raleway word-spacing-3'>At The White Stripes, we are passionate about hand crafting garments that fit your personality and lifestyle. Trust The White Stripes to offer you only the highest quality bespoke suits in town tailored with the finest fabrics from mills around the world.</p>
          </div>
        </section>

        {/* Third Section */}
        <section className='w-screen bg-gray-900 py-20 px-5 lg:px-36 flex flex-col items-center'>
          <h1 className='text-white text-center text-3xl lg:text-4xl mt-0 Calibri'>FINE FABRICS</h1>
          <p className='Raleway text-white lg:text-center text-justify w-full lg:w-8/12 mt-10'>We believe a perfect suit has three main ingredients: the fine fabric, an impeccable fit and a touch of personality. As fabrics have a big role to play in suits used in summer, our team will invest time in understanding your usage pattern and recommend the finest fabric based on how you will be using your suit.</p>
          <div className='bg-gray-300 w-full grid lg:grid-cols-5 grid-cols-1 py-6 mt-10 px-6'>
            <img src="/Assets/01.png" className="mx-auto" alt="" />
            <img src="/Assets/02.png" className="mx-auto" alt="" />
            <img src="/Assets/03.png" className="mx-auto" alt="" />
            <img src="/Assets/04.png" className="mx-auto" alt="" />
            <img src="/Assets/05.png" className="mx-auto" alt="" />
          </div>
        </section>

        {/* Fourth Section */}
        <section className='w-screen bg-white py-20 lg:px-36 px-5 flex flex-col'>
          <h1 className='text-gray-800 text-4xl text-center Calibri'>THE BRAND</h1>
          <p className='Raleway text-gray-800 mt-10 font-medium lg:text-left text-justify'>The White Stripes Tailors & Shirtmakers believes in the power of individualism, perfection and delightful service, and this spirit reflects in everything we do, from tailored suits to hand-sewn ties. We are devoted to classical gentlemen's elegance yet would embrace unconventionality based on individual taste. Our trained tailoring team will go that extra mile to delight you. </p>
          <div className="w-8/12 lg:w-4/12 h-auto m-auto mt-10 flex justify-between items-center">
            <a target={'_blank'} href="https://instagram.com/whitestripes_tailors"><span className='cursor-pointer p-3 text-2xl rounded-full buttons text-white duration-200 flex items-center justify-center w-max'><BsInstagram /></span></a>
            <a target={'_blank'} href="https://www.linkedin.com/company/whitestripes-tailors/"><span className='cursor-pointer p-3 text-2xl rounded-full buttons text-white duration-200 flex items-center justify-center w-max'><FaLinkedinIn /></span></a>
            <a target={'_blank'} href="https://youtube.com/channel/UCaCe7oMK6p7B8Y29qzNJ9OA"><span className='cursor-pointer p-3 text-2xl rounded-full buttons text-white duration-200 flex items-center justify-center w-max'><AiFillYoutube /></span></a>
          </div>
          <div className='bg-gray-600 py-10 flex items-center flex-col mt-12 box-shadow-light'>
            <h1 className='text-white text-4xl text-center Calibri'>OUR TAILORING</h1>
            <p className='Raleway text-white mt-10 text-center w-9/12'>A suit tells the world you are ready for business. With The White Stripes, you can be assured of a perfect bespoke experience ranging from a perfect fit to inlays that allow adjustment to the main body seams, and from cuffs that feature opening slit to hand stitched button holes and hand-sewn ties.</p>
          </div>
        </section>

        {/* Fifth Section */}
        <section className='w-screen bg-white py-20 px-5 lg:px-36 flex flex-col' id='bottom'>
          <h1 className='text-gray-800 text-4xl text-center Calibri'>OUR STORES</h1>
          <div className='bg-white py-10 flex mt-10 lg:mt-36 lg:flex-row flex-col'>
            <div className='w-full lg:w-1/2 border-b lg:border-b-0 lg:pb-0 pb-10 lg:border-r text-center border-gray-600'>
              <h1 className='text-gray-800 text-3xl mb-2'>DUBAI</h1>
              <div className='Raleway'>
                <p className='mb-0.5'>THE WHITE STRIPES</p>
                <p>Shop No 7, Lake City Tower</p>
                <p>Cluster D, JLT, Dubai</p>
                <p>United Arab Emirates</p>
                <div className='flex-col flex'>
                  <a href="tel:04-5913330">04-5913330</a>
                  <a href="tel:050-9016869">050-9016869</a>
                </div>
                <div className='flex items-center justify-center'>
                  <button className='mt-4 border accent-text-color accent-border-color px-3 py-2 accent-button'><a href="https://goo.gl/maps/GFBY9fYHNGWGZQHJ9">GET DIRECTION</a></button>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 border-t lg:border-t-0 lg:pt-0 pt-10 lg:border-l text-center border-gray-600'>
              <h1 className='text-gray-800 text-3xl mb-2'>ABU DHABI</h1>
              <div className='Raleway'>
                <p className='mb-0.5'>THE WHITE STRIPES</p>
                <p>Shop No 1, Al Hashemi Building</p>
                <p>Al Dhafra St - Abu Dhabi</p>
                <p>United Arab Emirates</p>
                <div className='flex-col flex'>
                  <a href="tel:02-8865399">02-8865399</a>
                  <a href="tel:050-9016473">050-9016473</a>
                </div>
                <div className='flex items-center justify-center'>
                  <button className='mt-4 border accent-text-color accent-border-color px-3 py-2 accent-button'><a href="https://goo.gl/maps/eYQffKevbh8qAwky5">GET DIRECTION</a></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer appointment={true} vipexperience={true} />
      </div>
    </>
  )
}

export default Home