import React from "react";
import infinity from "../assets/images/infinity.png";
import sec5e1 from "../assets/images/sec5-ellipse1.png";
import sec5e2 from "../assets/images/sec5-ellipse2.png";
import sec5a1 from "../assets/images/sec5-arrow1.png";
const myArray = [
  {
    bg: "bg-[#EFB93B]",
    num: "01",
     dis: "Organizational concept (creations)",
    id:1,
  },
  {
    bg: "bg-[#E0480A]",
    num: "02",
      dis: "Directional Process (Actions)",
    id:2
  },
  {
    bg: "bg-[#4D86DC]",
    num: "03",
      dis: "Operational Development (technical team)",
    id:3
  },
  {
    bg: "bg-[#364EC6]",
    num: "04",
      dis: "Strategic Opportunities (alliances)",
    id:4
  },
  {
    bg: "bg-[#6A3DAD]",
    num: "05",
      dis: "Stakeholders (benefits)",
    id:5
  },
  {
    bg: "bg-[#ED5C83]",
    num: "06",
      dis: "Human Identity (social contribution)",
    id:6
  },
];
const Sec5 = () => {
  const cards = myArray.map((myArray) => (
    <div key={myArray.id} className=" md:w-1/3 sm:w-1/2 w-full xl:w-1/6 mb-4 xl:mb-0 flex justify-center">
      <div
        className={`max-w-[206.87px] ${myArray.bg} rounded-[14.91px] pt-2 pl-3 pb-11 hover:scale-110 duration-500`}
      >
        <p className="text-white opacity-50 font-montserrat font-bold lg:text-[27.96px] text-xl leading-[34.08px] mb-5">
          {myArray.num}
        </p>
        <h4 className="lg:text-xl text-base text-white font-montserrat leading-[24.38px] font-bold">
          {myArray.dis}
        </h4>
      </div>
    </div>
  ));
  return (
    <div  className="pt-[100px] lg:pb-36 pb-20 relative z-[1]">
      <img src={sec5e1} alt="e1" className="absolute left-0 top-4" />
      <img
        src={sec5e2}
        alt="e2"
        className="absolute right-0 bottom-[-10%] z-[-1]"
      />
      <img src={sec5a1} alt="a1" className="absolute top-[10%] right-[7%]" />
      <div className="container max-w-[1360px] mx-auto">
        <h2 className="font-montserrat lg:text-[50px] font-bold leading-[60.95px] text-[#32352C] text-center text-3xl">
          RoadMap
        </h2>
        <p className="text-center font-montserrat lg:text-lg text-[14px] lg:opacity-70 max-w-[672px] mx-auto">
          Knowing our values, understanding the business idea and then,
          gradually, presenting the plans to the public is our way of doing
          things.
        </p>
        <img src={infinity} alt="img2" className="mx-auto mt-[75px] mb-14" />
              <div className="flex flex-wrap flex-row">
                  {cards}
        </div>
      </div>
    </div>
  );
};

export default Sec5;
