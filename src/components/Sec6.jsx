import React, { useEffect, useState } from 'react'

const Sec6 = () => {
  const [time, setTime] = useState({});
  function dateDifference(date1, date2) {
    const difference = {};
    let tmp = date2 - date1;
    difference.days = Math.floor(tmp / 86400000);
    tmp -= difference.days * 86400000;
    difference.hours = Math.floor(tmp / 3600000);
    tmp -= difference.hours * 3600000;
    difference.minutes = Math.floor(tmp / 60000);
    tmp -= difference.minutes * 60000;
    difference.seconds = Math.floor(tmp / 1000);
    return difference;
  }

  useEffect(() => {
    setInterval(() => {
      let timeTaken = dateDifference(
        new Date(Date.now()),
        new Date(`2024-03-22T02:00:00.000Z`)
      );
      setTime(timeTaken);
    }, 0);
  }, []);
  return (
    <div className='py-20'>
      <div className="container max-w-[1140px] mx-auto">
        <h4 className='text-center text-white font-montserrat lg:text-3xl sm:text-2xl text-xl font-bold leading-[52.2px] max-w-[609px] mx-auto '>Public Sale 5% in ERC20 & BEP20, 100% for the Community</h4>
        <div className="flex items-center justify-center sm:gap-[14px] gap-2 mt-[58px]">
          <div>
            <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 py-2 sm:pb-[9px] sm:ps-[20px] md:w-[106px] max-sm:w-[53px] max-md:w-[105px]">
              <p className="text-white font-montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                {time && time.days}
              </p>
            </div>
            <p className="text-center text-white font-montserrat sm:text-lg text-[14px] font-medium leading-[31px] pt-[5px]">
              Days
            </p>
          </div>
          <p className=" mb-[2.5rem] text-white font-montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
            :
          </p>
          <div>
            <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px] md:w-[106px] max-sm:w-[53px] max-md:w-[105px]">
              <p className="text-white font-montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                {time && time.hours}
              </p>
            </div>
            <p className="text-center text-white font-montserrat sm:text-lg text-[14px] font-medium leading-[31px] pt-[5px]">
              hours
            </p>
          </div>
          <p className=" mb-[2.5rem] text-white font-montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
            :
          </p>
          <div>
            <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px] md:w-[106px] max-sm:w-[53px] max-md:w-[105px]">
              <p className="text-white font-montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                {time && time.minutes}
              </p>
            </div>
            <p className="text-center text-white font-montserrat sm:text-lg text-[14px] font-medium leading-[31px] pt-[5px]">
              Minute
            </p>
          </div>
          <p className=" mb-[2.5rem] text-white font-montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
            :
          </p>
          <div>
            <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px] md:w-[106px] max-sm:w-[53px] max-md:w-[105px]">
              <p className="text-white font-montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                {time && time.seconds}
              </p>
            </div>
            <p className="text-center text-white font-montserrat sm:text-lg text-[14px] font-medium leading-[31px] pt-[5px]">
              Second
            </p>
          </div>
        </div>
        <div className='flex justify-center mt-[50px]'><button className='bg-white py-4 px-7 rounded-full border border-white group duration-500 hover:bg-transparent'><span className='bg-text-gradient text-transparent bg-clip-text font-montserrat lg:text-base text-[12px] font-semibold leading-[19.5px] group-hover:text-white'>BUY WUAO</span></button></div>
      </div>
    </div>
  )
}

export default Sec6
