import Header from '@/components/Header'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'

import gsap from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import FooterContent from '@/components/FooterContent'

const Messages = () => {
  const [length, setLength] = useState(10)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    let ctx = gsap.context(() => {
    //   gsap.to('.pin-left', {
    //     scrollTrigger: {
    //       trigger: '.pin-right',
    //       start: '-68px top',
    //       endTrigger: `.end-trigger-${length}`,
    //       end: 'bottom bottom',
    //       pin: '.pin-right',
    //       pinSpacing: false,
    //     },
    //   })
    })
    return () => ctx.revert()
  }, [length])


  return (
    <div className="relative">
      <div className="mt-12" />
      <Layout>
        <div className="flex lg:flex-row items-start w-full lg:pt-6 pt-5 hp-container">

          <div className=" min-h-screen w-[70%] flex flex-col gap-2 pr-6">
            <div className="bg-[#606060] w-full h-[90vh] rounded-lg">
              messages container
            </div>
          </div>

          <div className="min-h-[80vh] w-[30%] flex flex-col gap-2">

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

export default Messages
