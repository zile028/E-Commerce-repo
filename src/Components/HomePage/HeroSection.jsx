import React from 'react'


//Assets
import hero from '../../Assets/HeroSection/Hero.png'

function HeroSection() {
  return (
    <div className='flex justify-center md:justify-between items-center mt-12'>
    
         <div className='space-y-6'>
                <h1 className='text-[#3C9379] text-[25px] md:text-[50px] font-semibold'>
             <span className='text-[black]'>Best Place to Buy<br/></span>
                Everything.</h1>

                <p className='w-[500px]'>At Bachira, you can shop for all your favorite beauty brands, clothes,
                                            household products and more at a single place.</p>

                <button className='transition-all ease-in-out delay-100 text-[20px] px-3 py-2 border-2 border-[#3C9379] bg-[#3C9379] text-[#fff] rounded-2xl hover:bg-[#fff] hover:text-[#3C9379]'>Shopping Now</button>
         </div>


         <div>
            <img src={hero} draggable={false} alt="hero img" />
         </div>
    </div>
  )
}

export default HeroSection
