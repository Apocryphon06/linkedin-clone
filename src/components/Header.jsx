import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const Header = () => {
  const Router = useRouter()

  return (
    <Fragment>
      {Router.pathname !== '/' && (
        <div className="h-12 bg-[#222222] text-white w-full flex items-center justify-start lg:px-40 md:px-6 px-4 fixed top-0 z-[98]">
          Header
        </div>
      )}
    </Fragment>
  )
}

export default Header
