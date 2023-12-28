import React from 'react'
import sec7img from '../assets/images/sec7img.png'
import sec7e1 from '../assets/images/sec7-ellipse1.png'
import sec7e2 from '../assets/images/sec7-ellipse2.png'
import sec7a1 from '../assets/images/sec7-arrow1.png'
const Sec7 = () => {
  return (
    <div className='py-28 relative'>
      <img src={sec7e1} alt="e1" className='absolute left-0 top-4 hidden sm:block' />
      <img src={sec7e2} alt="e2" className='absolute right-0 bottom-[-20%] hidden sm:block' />
      <img src={sec7a1} alt="a1" className='absolute left-[0%] bottom-[18%] hidden sm:block' />
          <h2 className='font-montserrat lg:text-[50px] text-3xl font-bold text-center leading-[60.95px] text-[#32352C] mb-[22px] '>Tokenomics</h2>
          <div className="container max-w-[993.94px] mx-auto">
              <img src={sec7img} alt="img7"  className='w-full'/>
      </div>
    </div>
  )
}

export default Sec7
