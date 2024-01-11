import OutlinedBtn from '@/components/OutlinedBtn'
import PrimaryBtn from '@/components/PrimaryBtn'
import TextInput from '@/components/common/input/TextInput'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'

const Home = () => {
  const [params, setParams] = useState({
    email: '',
    password: '',
  })

  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (e) => {
    let { name, value } = e.target

    setParams({ ...params, [name]: value })
  }

  const router = useRouter()

  useEffect(() => {
    router.push('/hp')
  }, [])

  return (
    <Fragment>
      <div className="w-full flex flex-col 3xl:px-[200px] lg:px-[160px] md:px-6 px-4">
        {/* login header */}
        <div className="flex items-center justify-between h-16 w-full">
          <div>
            <p className="text-2xl font-semibold">LOGO</p>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <p className="text-base font-medium">Join now</p>
            </div>

            <div>
              <button className="h-[48px] flex items-center justify-center px-6 rounded-full border border-primaryBlue text-primaryBlue font-medium text-base">
                Sign in
              </button>
            </div>
          </div>
        </div>

        {/* welcome title & form */}
        <div className="flex flex-col gap-6 mt-6">
          <h2 className="text-darkRed 3xl:text-5xl lg:text-5xl text-3xl lg:w-1/2 font-light 3xl:leading-snug lg:leading-snug leading-snug">
            Welcome to your professional community
          </h2>

          <div className="lg:w-4/12 flex flex-col gap-2">
            <p className="font-medium 3xl:text-base text-sm">Email or phone</p>
            <TextInput
              name="email"
              value={params.email}
              handleChange={handleChange}
            />
          </div>

          <div className="lg:w-4/12 flex flex-col gap-2">
            <p className="font-medium 3xl:text-base text-sm">Password</p>
            <div className="relative w-full">
              <TextInput
                name="password"
                value={params.password}
                handleChange={handleChange}
                type={!isVisible ? 'password' : 'text'}
              />
              <p
                onClick={() => setIsVisible(!isVisible)}
                className="3xl:text-base text-sm text-primaryBlue font-medium cursor-pointer hover:underline absolute flex items-center justify-end h-[48px] top-0 right-2 select-none"
              >
                {!isVisible ? 'Show' : 'Hide'}
              </p>
            </div>
          </div>

          <div className="w-fit">
            <p className="text-primaryBlue 3xl:text-base lg:text-base text-sm font-medium cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>
        </div>

        {/* sign in btn */}
        <div className="mt-6 lg:w-4/12 w-full">
          <PrimaryBtn label="Sign in" />
        </div>

        {/* separator */}
        <div className="mt-6 lg:w-4/12 w-full relative">
          <div className="border border-[#202020]/20 w-full" />
          <div className="w-full h-full absolute top-0 flex items-center justify-center">
            <p className="bg-[#f4f2ee] px-3 3xl:text-base text-sm text-primaryDark">
              or
            </p>
          </div>
        </div>

        {/* user agreement */}
        <div className="mt-6 lg:w-4/12 w-full relative">
          <p className="3xl:text-sm text-xs font-medium text-secondary 3xl:leading-loose leading-loose">
            By clicking Continue, you agree to LinkedIn&apos;s{' '}
            <span className="text-primaryBlue hover:underline cursor-pointer">
              User Agreement
            </span>
            ,{' '}
            <span className="text-primaryBlue hover:underline cursor-pointer">
              Privacy Policy
            </span>
            , and{' '}
            <span className="text-primaryBlue hover:underline cursor-pointer">
              Cookie Policy
            </span>
            .
          </p>
        </div>

        {/* continue with google btn */}
        <div className="my-6 lg:w-4/12 w-full relative flex flex-col gap-6">
          <OutlinedBtn label="Continue with Google" image="/icons/google.svg" />

          <OutlinedBtn label="New to Linkedin? Join now" />
        </div>
      </div>
    </Fragment>
  )
}

export default Home
