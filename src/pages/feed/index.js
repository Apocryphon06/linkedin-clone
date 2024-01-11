import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'

import gsap from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import FooterContent from '@/components/FooterContent'

const Home = () => {
  const [length, setLength] = useState(10)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    let ctx = gsap.context(() => {
      gsap.to('.pin-left', {
        scrollTrigger: {
          trigger: '.pin-right',
          start: '-68px top',
          endTrigger: `.end-trigger-${length}`,
          end: 'bottom bottom',
          pin: '.pin-right',
          pinSpacing: false,
        },
      })
    })
    return () => ctx.revert()
  }, [length])

  // const [menu, setMenu] = useState(false)

  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       setLength((length) => length + 1)
  //     }, 1500)

  //     return () => clearInterval(interval)
  //   }, [length])

  return (
    <div className="relative">
      <div className="mt-12" />
      <Layout>
        <div className="flex lg:flex-row items-start w-full lg:pt-6 pt-5 hp-container">
          <div className="pin-left min-h-screen w-[25%] flex flex-col gap-2 pr-6">
            <div className="bg-[#606060] w-full h-[60vh] rounded-lg">
              {length}
            </div>
            <div className="bg-[#606060] w-full h-[40vh] rounded-lg"></div>
          </div>
          {/* feed */}
          <div className="w-[45%] mx-auto flex flex-col gap-2">

            <div className='w-full container-rounded flex flex-col'>

              <div className='flex items-center gap-4'>

                <div>
                  <div className='bg-[#808080] w-12 h-12 rounded-full' />
                </div>

                <div className='w-full'>
                  <input className='outline-none h-[48PX] placeholder:text-[#404040] text-sm w-full border border-[#808080] px-4 rounded-full' placeholder='Start a post' />
                </div>

              </div>

              <div className='w-full grid grid-cols-3 items-start mt-4'>

                {React.Children.toArray(["Media", "Event", "Write article"].map((item) => (
                  <div className='flex flex-col items-center justify-center text-center'>
                    <div className='flex items-center gap-3'>
                      <div className='w-7 h-6 bg-[#808080] rounded' />
                      <p className='text-base text-[#404040]'>{item}</p>
                    </div>
                  </div>
                )))}

              </div>

            </div>

            <div className='w-full flex items-center gap-2 relative my-2'>
              <div className='border-b border-[#808080] w-full'>
              </div>

              <div className='absolute top-0 right-0 h-full flex items-center justify-center bg-[#f4f2ee] pl-2'>
                <p className='text-xs text-[#404040] w-full'>Sort by: Top</p>
              </div>
            </div>


            {React.Children.toArray(
              [...Array(length).keys()].map((item, index) => (
                <div
                  className={`container-rounded h-[90vh] ${index === 9 ? `end-trigger-${index}` : ''
                    }`}
                >
                  <div className='w-full flex items-center justify-between pr-8'>

                    <div className='flex items-center gap-3'>
                      <div className='w-9 h-9 rounded-full bg-[#808080]' />
                      <p className='text-sm text-[#404040]'>vivek kumar likes this</p>
                    </div>

                    <div className='flex items-center gap-4'>
                      <img className='cursor-pointer object-contain' src="/icons/threeDots.svg" alt="threeDots" />
                      <img className='w-4 h-4 cursor-pointer object-contain' src="/icons/x.svg" alt="x" />
                    </div>


                  </div>
                </div>
              )),
            )}
          </div>

          <div className="min-h-[80vh] w-[30%] flex flex-col gap-2 pl-6">

            <div className="bg-[#606060] w-full h-[30vh] p-3 rounded-lg">
              <p className="text-base font-medium">Linkedin News</p>
            </div>


            <div className="flex flex-col gap-4 pin-right">
              <div className="bg-[#606060] w-full p-3 rounded-lg h-[30vh]"></div>
              <div className="w-full">
                <FooterContent />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
