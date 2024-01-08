import Header from '@/components/Header'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'

import gsap from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Messaging from '@/components/Messaging'
import FooterContent from '@/components/FooterContent'

const Jobs = () => {
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
          <div className="pin-left min-h-screen w-3/12 flex flex-col gap-2 pr-6">
            <div className="bg-[#606060] w-full h-[60vh] rounded-lg">
              {length}
            </div>
            <div className="bg-[#606060] w-full h-[40vh] rounded-lg"></div>
          </div>

          <div className="w-5/12 mx-auto flex flex-col gap-2">
            {React.Children.toArray(
              [...Array(length).keys()].map((item, index) => (
                <div
                  className={`bg-[#505050] h-[700px] rounded-lg ${
                    index === 9 ? `end-trigger-${index}` : ''
                  }`}
                ></div>
              )),
            )}
          </div>

          <div className="min-h-[80vh] w-4/12 flex flex-col gap-2 pl-6">

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

export default Jobs
