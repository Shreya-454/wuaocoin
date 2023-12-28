import React from 'react'
import sec1img from '../assets/images/sec1-img.png'
import Nav from './Nav'
import arrow1 from '../assets/images/head-arrow1.png'
import arrow2 from '../assets/images/head-arrow2.png'
import arrow3 from '../assets/images/head-arrow3.png'
import arrow4 from '../assets/images/head-arrow4.png'
const Header = () => {
  return (
    <div>
      <header className='lg:pb-96 md:pb-20 pb-10 '>
        <Nav />
        <img src={arrow1} alt="a1" className='absolute top-[20%] left-[44%]' />
        <img src={arrow3} alt="a3" className='absolute left-[44%] bottom-[-15%]' />
        <img src={arrow4} alt="a4" className='absolute right-[8%] bottom-[-43%]' />
        <section className=' flex flex-col lg:pt-40 md:pt-20 pt-10 '>
          <div className="container max-w-[1140px] mx-auto px-3 flex-grow flex flex-col justify-center relative">
            <img src={arrow2} alt="a2" className='absolute left-[-10%] bottom-[-2%]'/>
            <div className='flex flex-row flex-wrap -mx-3 items-center '>
              <div className='md:w-1/2 w-full px-3 mb-10 lg:mb-0'>
                <p className='lg:text-xl text-base font-montserrat text-white font-semibold leading-[24.38px] text-center md:text-start '>Welcome to</p>
                <h1 className='lg:text-[65px] md:text-[50px] text-[40px] font-montserrat font-black text-white leading-[73.38px]  text-center md:text-start'>The Future of E-Commerce</h1>
                <p className='lg:text-lg text-[14px] font-montserrat font-medium leading-[31.32px] text-white lg:max-w-[384.94px] text-center md:text-start'>A multi-purpose token to improve digital sales and purchases</p>
                <div className='flex gap-4 mt-10 justify-center lg:justify-start'>
                  <button className='bg-white py-[13px] sm:px-[26px] px-5 rounded-full hover:bg-transparent group border border-white duration-500'><span  className='bg-clip-text text-transparent bg-text-gradient font-montserrat lg:text-base text-[12px] font-semibold leading-[19.5px] group-hover:text-white'>How To Buy</span></button>
                   <button className='bg-white py-[13px] sm:px-[22px] px-5 rounded-full hover:bg-transparent group border border-white duration-500'><span  className='bg-clip-text text-transparent bg-text-gradient font-montserrat lg:text-base text-[12px] font-semibold leading-[19.5px] group-hover:text-white'>Read Whitepaper</span></button>
                </div>
              </div>
              <div className="md:w-1/2 w-full px-3 xl:translate-x-16 flex justify-center items-center">
                <img src={sec1img} alt="img1"  className='w-full'/>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  )
}

export default Header
