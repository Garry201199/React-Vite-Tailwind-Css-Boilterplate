import React, { useRef, useMemo } from "react";
import { arrowUp, discount, robot } from "../assets";
import styles, { layout } from "../styles";

const Hero = () => {
  const randoms = useMemo(
    () => [
      "#adc178",
      "#fb5607",
      "#8338ec",
      "#e63946",
      "#14213d",
      "#ef233c",
      "#fee440",
      "#ffc2d1",
    ],
    []
  );
  const hoverRef = useRef();

  // const discoColors=()=>{
  //   var random = randoms[Math.floor((Math.random()*randoms.length))]
  //   hoverRef.current.style.background = random
  // }
  return (
    <section
      id="home"
      className={`relative flex md:flex-row flex-col items-center justify-center  ${styles.paddingY} font-raleway  `}
    >
      <div className="absolute w-52 h-52 z-0 -left-14 bg-slate-100/30 blur-3xl    rounded-full "></div>

      <div
        className={`xl:px-0 ${styles.paddingX} flex justify-center flex-col flex-1 h-fit gap-y-8  w-full`}
      >
        <div className="flex  uppercase  gap-x-4  max-w-fit items-center  tracking-wide bg-gradient-to-tr from-slate-900  to-slate-700   px-4   py-1 rounded-xl h-fit ">
          <img src={discount} className="w-[32px] h-[32px] " alt="discount " />
          <p className="text-slate-400 text-lg ">
            {" "}
            <span className="text-slate-200 text-xl ">20%</span> Discount for{" "}
            <span className="text-slate-200">
              {" "}
              <span className="text-xl">1</span> month{" "}
            </span>{" "}
            account
          </p>
        </div>

        <div className=" flex flex-col gap-y-8 tracking-wide relative">
          <p className="text-left font-bold  xl:text-[4.5rem] md:text-[4.5rem] sm:text-[2.8rem] leading-tight">
            The Next &nbsp; <br />{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-200 text-transparent bg-clip-text ">
              Generation
            </span>{" "}
            &nbsp; <br /> Payment Method.
          </p>
          <p className="w-[60%] text-[18px] flex items-center">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <div
            ref={hoverRef}
            className="flex p-3 items-center absolute rounded-full justify-center  top-0 right-12  ring-2 ring-cyan-400 w-[140px] h-[140px] "
          >
            <p
              // onMouseEnter={()=>discoColors()}
              // onMouseLeave={()=>discoColors()}
              className={` ${styles.tras} text-left text-[18px] flex    flex-col  `}
            >
              {" "}
              <span className="flex gap-x-1 ">
                Get{" "}
                <img className="object-contain  " src={arrowUp} alt="arrowUp" />
              </span>{" "}
              Started
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 relative ">
        <div class="bg-[#202020] mx-auto h-full ">
          <div
            className=" absolute left-0 
  right-0   z-0 mx-auto h-0 w-0 border-r-[150px] border-b-[500px] 
border-l-[150px] border-solid border-r-transparent
border-l-transparent border-b-cyan-300/40 rotate-180 blur-3xl   "
          ></div>
        </div>
        <img
          src={robot}
          className="z-10 object-contain h-[80%] w-full  "
          alt="robot"
        />
      </div>
    </section>
  );
};

export default Hero;
