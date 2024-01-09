import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const data = [

  {
    name:'Home',
    link:'/hp'
  },

  {
    name:'My Network',
    link:'/mynetwork'
  },

  {
    name:'Jobs',
    link:'/jobs'
  },

  {
    name:'Messaging',
    link:'/messaging'
  },

  {
    name:'Notifications',
    link:'/notifications'
  },

]


const Header = () => {
  const Router = useRouter()

  return (
    <Fragment>
      {Router.pathname !== '/' && (
        <div className="h-12 bg-[#222222] text-white w-full flex items-center justify-between lg:px-40 md:px-6 px-4 fixed top-0 z-[98]">
          <p className='text-lg font-medium'>Header</p>
          <div className="flex items-center gap-10">
            {React.Children.toArray(
              data.map((item) => <Link href={item.link} className='text-sm font-light'>{item.name}</Link>),
            )}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Header
