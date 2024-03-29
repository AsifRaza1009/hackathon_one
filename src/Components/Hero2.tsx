import React from "react";
import Image from "next/image";
import eve1 from "../../public/event1.webp";
import eve2 from "../../public/event2.webp";
import eve3 from "../../public/event3.webp";

export default function Hero2() {
  return (
    <>
      <div className='flex flex-col '>
        {/* main section div start */}

        <p className='text-[#418af7] font-bold text-md text-center pt-10'>
          PROMOTIONS
        </p>
        <h2 className='text-[#232323] text-center text-2xl  md:text-4xl py-2 font-bold'>
          Our Promotions Events
        </h2>

        <div className=' flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 px-2 lg:px-10 pt-6 justify-center items-stretch'>
          
          <div className=' flex flex-col justify-between lg:w-2/5 '>
            {/* main left div start */}

            <div className='bg-[#d6d6d8] flex flex-col flex-grow md:flex-row pt-5 md:pt-0 items-center px-5 md:justify-center '>
              <div>
                <p className='text-2xl text-[#232323] font-bold'>
                  GET UP TO <br /> <span className='text-4xl'>60%</span>{" "}
                </p>
                <p className='text-lg font-semibold text-[#232323] pt-2'>
                  For the summer season
                </p>
              </div>
              <div>
                <Image src={eve1} alt=''></Image>
              </div>
            </div>
            <div className='bg-[#212121] text-white text-center py-10 mt-4 md:px-0 flex flex-col flex-grow'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>GET 30% Off</h2>
              <p className='text-md py-4'>USE PROMO CODE</p>
              <button className='tracking-widest bg-[#474747] px-10 md:px-16 w-fit mx-auto py-2 border border-transparent rounded-lg font-bold items-center'>
                DINEWEEKENDSALE
              </button> 
            </div>
            {/* main left div end */}
          </div>

          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:w-3/5 py-4 md:py-0 '>
            {/* main right div start */}

            < div className='bg-[#efe1c7] flex flex-grow flex-col justify-between  md:pt-10'>
              <div>

              <p className='text-md md:pl-2 text-center md:text-left pt-3 md:pt-0'>
                Flex Sweatshirt
              </p>
              <p className='text-lg md:pl-2 text-center md:text-left  '>
                $100.00 <span className='font-semibold '>$75.00</span>{" "}
              </p>
              </div>
              
              <Image src={eve2} alt='' className='mx-auto'></Image>
              
            </div>

            <div className='bg-[#d7d7d9] flex flex-grow flex-col justify-between  md:pt-10 '>
              <div>

              <p className=' text-md md:pl-2 text-center md:text-left pt-3 md:pt-0'>
                Flex Push Button Bomber
              </p>
              <p className='text-md md:text-lg md:pl-2 text-center md:text-left pt-3 md:pt-0 '>
               <span className="line-through"> $225.00 </span>  <span className='font-semibold ml-2'>$190.00</span>{" "}
              </p>
              </div>
              <Image src={eve3} alt='' className='mx-auto'></Image>
            </div>

            {/* main right div end  */}
          </div>
        </div>

        {/* main section div end */}
      </div>
    </>
  );
}
