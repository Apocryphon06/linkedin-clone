import React, { useEffect } from 'react'

import gsap from 'gsap/dist/gsap'


const Home = () => {

  useEffect(() => {

    let tl = gsap.timeline({
      repeat: -1,
    })

    tl.to('.loader-bar', {
      x: '100%',
      duration: 1,
      ease: 'power1.inOut'
    })

    tl.to('.loader-bar', {
      x: '0%',
      duration: 1,
      ease: 'power1.inOut'
    })

  }, [])


  return (
    <div className='w-full h-screen flex items-center justify-center lg:text-base text-sm'>

      <div className='flex flex-col gap-2'>

        <h2 className='lg:text-2xl text-lg text-primaryBlue font-medium text-center'>Linkedin</h2>

        <div className='w-40 h-1 relative'>
          <div className='w-full absolute top-0 left-0 flex h-full bg-[#808080]/10 rounded'>
            <div className='w-1/2 h-full bg-primaryBlue loader-bar rounded' />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home