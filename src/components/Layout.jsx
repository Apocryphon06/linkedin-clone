import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="lg:px-40 md:px-6 px-3 w-full min-h-screen">{children}</div>
  )
}

export default Layout
