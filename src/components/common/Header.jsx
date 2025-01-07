import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const menu_items = [
    {
        name: 'Home',
        icon: '/header/home.svg',
        link: '/'
    },
    {
        name: 'My Network',
        icon: '/header/my-network.svg',
        link: '/my-network'
    },
    {
        name: 'Jobs',
        icon: '/header/jobs.svg',
        link: '/jobs'
    },
    {
        name: 'Messsaging',
        icon: '/header/message.svg',
        link: '/messaging'
    },
    {
        name: 'Notifications',
        icon: '/header/notifications.svg',
        link: '/notifications'
    },
]

const Header = () => {

    const Router = useRouter()
    const pathname = usePathname()

    console.log(pathname, 'pathname')

    return (
        <Fragment>
            <div className='w-full bg-white fixed top-0 left-0 z-20 h-12'>
                <div className='lg:w-10/12 mx-auto flex items-center justify-between h-12'>
                    <div className='flex items-center gap-2 lg:w-4/12'>
                        <FaLinkedin className='w-10 h-10' color='#0A66C2' />

                        <div className='flex items-center h-9 px-4 bg-blueHover text-[#666666] rounded-md gap-2 w-full'>
                            <IoSearch className="w-5 h-5" color="#666666" />
                            <input placeholder='Search' className='outline-none text-sm w-full bg-transparent' />
                        </div>
                    </div>

                    <div className='flex items-center lg:w-6/12 justify-end h-full'>
                        {
                            React.Children.toArray(
                                menu_items?.map(item => (
                                    <div
                                        onClick={() => {
                                            Router.push(item.link)
                                        }}
                                        className={`flex flex-col cursor-pointer items-center justify-center text-center h-full px-4 ${pathname === item.link ? 'border-b-2 border-[#000000] opacity-1' : 'border-b-2 border-transparent opacity-60'}`}>
                                        <img
                                            src={item?.icon}
                                            alt={item?.icon}
                                            className='w-5 h-5'
                                        />
                                        <p className='text-xs'>{item?.name}</p>
                                    </div>
                                ))
                            )
                        }

                    </div>

                </div>
            </div>

            <div className='mt-12' />

        </Fragment>
    )
}

export default Header