import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'

const Messaging = () => {
  const [menu, setMenu] = useState(false)

  const Router = useRouter()

  return (
    <Fragment>
      {Router.pathname !== '/' && (
        <div
          className={`w-[20%] bg-[#808080] ${
            !menu ? 'h-12' : 'h-[80vh]'
          } fixed bottom-0 right-2 rounded-tl-lg transition-all ease-linear duration-100 rounded-tr-lg flex items-start justify-center p-4`}
        >
          <div className="flex items-center w-full justify-between">
            <p className="text-sm font-medium">Messagining</p>

            <div className="flex items-center gap-6">
              <button>
                <img src="/icons/write.svg" alt="write" className="w-4 h-4" />
              </button>

              <button>
                <img
                  src="/icons/threeDots.svg"
                  alt="threeDots"
                  className="w-4 h-4"
                />
              </button>

              <button onClick={() => setMenu(!menu)} className="">
                <img
                  src="/icons/upArrow.svg"
                  alt="upArrow"
                  className={`w-4 h-4 ${!menu ? '' : '-rotate-180'}`}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Messaging
