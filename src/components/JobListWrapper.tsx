import { nanoid } from 'nanoid'
import React from 'react'
import github from '../assets/logo/github.svg'

function JobListWrapper({content}:any) {
  return (
    <div className="lg:w-[555px] bg-white rounded-lg shadow-md ">
          <div className="px-5 pt-5">
          <p className="text-base font-sansSemibold">{content?.title}</p>
          <p className="text-sm font-sansRegular text-gray">
            {content?.subtext}
          </p>
          </div>

          {[1, 1, 1, 1].map((item: any) => (
            <div key={nanoid()} className="flex p-5 items-center gap-5 py-[14px] border-b border-grayLight last:border-none hover:bg-grayLight cursor-pointer">
              <img src={github} alt={github} />
              <div>
                <p className="text-linkedinBlue text-base font-sansMedium hover:underline cursor-pointer">
                  React Developer
                </p>
                <p className="text-sm">Github</p>
                <p className="text-sm font-light text-gray">
                  Bangalore, Karnataka, India (Remote)
                </p>
                <p className="text-xs font-bold text-green-700">9 hours ago</p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default JobListWrapper