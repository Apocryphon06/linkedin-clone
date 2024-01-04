'use-client'
import React from 'react'

import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="w-full h-screen bg-white text-center p-20 flex flex-col items-center justify-start">
      <div className="w-full flex flex-col gap-2">
        <p className="text-3xl font-medium">LOGO</p>

        <div className="lg:w-2/12 w-8/12 mx-auto h-1 bg-[#d9d9d9] relative">
          <motion.div
            animate={{
              x: ['100%', '0%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="w-6/12 h-full bg-primaryBlue"
          />
        </div>
      </div>
    </div>
  )
}

export default Loader
