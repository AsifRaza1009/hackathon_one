import React from 'react'
import eve1 from '../../public/hero4.webp'
import Image from 'next/image'





export default function Hero4() {
  return (
    <>
    {/* main div start */}
    <div className='p-10'>
      <div className='relative'>

    <div className=' text-3xl md:text-5xl font-bold text-center md:text-right md:pr-32 '>
    <p>Unique and</p>
    <p>Authentic Vintage</p>
    <p>Designer Jewelry</p>
</div>

<div className='flex flex-col xl:flex-row p-10 xl:space-x-5 space-y-10 items-stretch'>
        {/*  main left div stat */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  px-8  xl:w-1/2 '>


<div className=''>
    <h4 className='text-xl font-semibold pt-4'>Using Good Quality Materials</h4>
    <p className=' pt-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
</div>

<div className=''>
    <h4 className='text-xl font-semibold pt-4'>Using Good Quality Materials</h4>
    <p className='pt-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
</div>
<div className=''>
    <h4 className='text-xl font-semibold pt-4'>Using Good Quality Materials</h4>
    <p className='pt-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
</div>
<div className=''>
    <h4 className='text-xl font-semibold pt-4'>Using Good Quality Materials</h4>
    <p className='pt-5'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
</div>








        </div>
{/* main left div end */}








{/* right div start */}

<div className=' xl:w-1/2 flex flex-col justify-center lg:flex-row py-10 lg:py-0 items-stretch  lg:space-x-8'>
    
     <div className='bg-[#d7d7d9] mx-auto lg:w-1/2 items-stretch'>

     <Image src={eve1} alt='' width={800} height={1000} ></Image> 

     </div>
     <div className=' py-8 lg:pr-16 lg:w-1/2 text-center'>
        <p className='pb-6 '>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
     <button className='px-3 py-3 bg-black text-white'>See All Product</button>
     </div>


     </div>
{/* right div end */}

</div>
    {/* for back ground div start */}
    <div className='absolute inset-0 -z-50 flex items-center justify-left pl-20'>
          <div className='text-[54px] font-bold text-gray-200 sm:text-8xl sm:font-extrabold'>
            <p>Different </p>
            <p>from </p>
            <p>Others</p>
            
          </div>
        </div>
    {/* back ground div end */}
    
    
    
    
    </div>
        </div>
        {/* main div end */}
    </>
  )
}
