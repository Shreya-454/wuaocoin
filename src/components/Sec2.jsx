import React from 'react'
import piechart from '../assets/images/piechart.png'
import sec2elip from '../assets/images/sec2-ellipse.png'
const Sec2 = () => {
  return (
    <div>
          <section className='relative overflow-x-clip pt-20 lg:pt-0 lg:-mb-20'>
              <img src={sec2elip} alt="ellipse" className='absolute right-0 top-[-50%]' />
              <div className="container max-w-[1140px] mx-auto px-3 flex justify-center items-center">
                  <div className="flex flex-wrap md:flex-row -mx-3 lg:-translate-y-40 items-center flex-col-reverse">
                      <div className="md:w-1/2 w-full px-3 xl:-translate-x-14">
                          <img src={piechart} alt="img2" className='w-full animate-spin-slow' />
                      </div>
                      <div className="md:w-1/2 w-full px-3 ">
                          <h2 className='lg:text-[50px] text-3xl font-montserrat font-bold text-[#32352C] leading-[60.95px] text-center md:text-start'>Our Project</h2>
                          <p className='font-montserrat lg:text-lg text-[14px] leading-[31.32px] font-normal lg:opacity-70 lg:max-w-[447px] text-center md:text-start '>Wuaocoin is the first project in the TechFi category that allows users multiple options to have utility and usability in the ecosystem, its time to change the way of seeing the purchases and sales of products and services within an multilateral electronic commerce platform using crypto technology.</p>
                      </div>
                  </div>
              </div>
      </section>
    </div>
  )
}

export default Sec2
