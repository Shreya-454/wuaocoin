import React from 'react'
import sec4img1 from '../assets/images/sec4img1.png'
import sec4img2 from '../assets/images/sec4img2.png'
import sec4a1 from '../assets/images/sec4-arrow1.png'
const Sec4 = () => {
  return (
    <div className='pt-[121px] pb-16'>
          <div className="flex flex-wrap flex-row ">
              <div className="md:w-1/3 w-full flex justify-center md:justify-start">
                  <img src={sec4img1} alt="img4" />
              </div>
        <div className='md:w-1/3 w-full relative'>
          <img src={sec4a1} alt="a1" className='absolute bottom-[28%] left-[-4%]' />
                  <h2 className='text-center font-montserrat text-white lg:text-[50px] text-3xl font-bold leading-[60.95px]'>Whitepaper</h2>
                  <p className='font-montserrat lg:text-lg text-[14px] text-white font-semibold leading-[31.32px] max-w-[577.96px] mx-auto text-center '>We want you to know our vision we leave you our whitepaper and now be a part of the digital transformation.
                  </p>
                  <div className="flex justify-center mt-14">
                              <button className="bg-white rounded-full py-[13px] px-5 hover:bg-transparent border border-white group duration-500"><span className="bg-text-gradient text-transparent bg-clip-text font-montserrat lg:text-base text-[12px] font-semibold  group-hover:text-white">Read WhitePaper</span></button>
                          </div>
              </div>
              <div className="md:w-1/3 w-full flex justify-center md:justify-start">
                  <img src={sec4img2} alt="img4" />
              </div>
      </div>
    </div>
  )
}

export default Sec4
