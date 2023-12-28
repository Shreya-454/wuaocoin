import React from "react";
import sec3img1 from "../assets/images/sec3img1.png";
import sec3img2 from "../assets/images/sec3img2.png";
import sec3img3 from "../assets/images/sec3img3.png";
import sec3a1 from  '../assets/images/sec3-arrow1.png'
const Sec3 = () => {
  return (
    <div className=" lg:pb-40 pb-20 pt-10 lg:pt-0 relative">
      <img src={sec3a1} alt="a1" className="absolute left-[3%] bottom-[17%]" />
      <div className="container mx-auto max-w-[1140px] px-3">
        <h2 className="font-montserrat lg:text-[50px] text-3xl font-bold text-center text-[#32352C] leading-[60.95px] pb-[60px]">
          Benefits
        </h2>
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/3 md:w-1/2 w-full  px-3 flex justify-center flex-col items-center mb-5 md:mb-0">
            <div className="bg-[#FBF3E6] overflow-hidden p-5 animate-wiggle-view "><img src={sec3img1} alt="img3" /></div>
            <p className="lg:text-lg text-[14px] font-montserrat text-center lg:opacity-70 text-black max-w-[317px] mx-auto ">
              Services, Products and Community All in one place!
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-3 flex justify-center flex-col items-center mb-5 md:mb-0">
            <div className="bg-[#FBF3E6] overflow-hidden animate-wiggle-view "><img src={sec3img2} alt="img3" /></div>
            <p className="lg:text-lg text-[14px] font-montserrat text-center lg:opacity-70 text-black max-w-[272px] mx-auto">
              Selling in crypto will no longer be complicated, it will be safe
                          and reliable.
            </p>
          </div>
          <div className="lg:w-1/3 w-full px-3 flex justify-center flex-col items-center mb-5 md:mb-0">
                      <div className="bg-[#FBF3E6] overflow-hidden animate-wiggle-view "><img src={sec3img3} alt="img3" /></div>
                      <p className="lg:text-lg text-[14px] font-montserrat text-center lg:opacity-70 text-black max-w-[288px] mx-auto">Buying and getting a real discount is possible? Join and check it out.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
