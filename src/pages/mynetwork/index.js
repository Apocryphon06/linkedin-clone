import Layout from '@/components/Layout'
import React, { useEffect } from 'react'

import gsap from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import FooterContent from '@/components/FooterContent'

const MyNetwork = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    let ctx = gsap.context(() => {
      gsap.to('.nw-left-section-pin', {
        scrollTrigger: {
          trigger: '.nw-container',
          start: '-48px top',
          endTrigger: '.end-nw-pin',
          end: 'bottom bottom',
          pin: '.nw-left-section-pin',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative bg-[#E1E1E1]">
      <div className="pt-12" />

      <Layout>
        <div className="flex lg:flex-row items-start min-h-screen pt-6 nw-container">
          <div className="w-[30%] bg-white h-[85vh] nw-left-section-pin flex-shrink-0 p-4 rounded-lg flex flex-col items-start justify-end">
            <FooterContent />
          </div>

          <div className="w-[70%] h-full flex-shrink-0 flex flex-col gap-6 pl-6">
            <div className="w-full bg-[#808080] h-[400px] flex-shrink-0 rounded-lg"></div>

            <div className="w-full bg-[#808080] h-[400px] flex-shrink-0 rounded-lg"></div>
            <div className="w-full bg-[#808080] h-[400px] flex-shrink-0 rounded-lg"></div>
            <div className="w-full bg-[#808080] h-[400px] flex-shrink-0 rounded-lg"></div>
            <div className="w-full bg-[#808080] h-[400px] flex-shrink-0 rounded-lg"></div>

            <div className="w-full bg-[#808080] h-[400px] flex-shrink-0 rounded-lg end-nw-pin"></div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default MyNetwork
