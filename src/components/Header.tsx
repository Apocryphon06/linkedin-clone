import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Label from "./Label";

function Header() {
  const [active, setActive] = useState("/");
  const location = useLocation();
  console.log(location,'location url')

  useEffect(()=>{
    setActive(location.pathname)
  },[])
  

  const SearchIcon = ({ size }: any) => {
    return (
      <div className={`${size}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="#666666"
          className="mercado-match"
          focusable="false"
        >
          <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
        </svg>
      </div>
    );
  };

  const Linkedin = ({ size }: any) => {
    return (
      <div className={`${size}`}>
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_34_790)">
            <path
              d="M34 2.5V31.5C34 32.163 33.7366 32.7989 33.2678 33.2678C32.7989 33.7366 32.163 34 31.5 34H2.5C1.83696 34 1.20107 33.7366 0.732233 33.2678C0.263392 32.7989 0 32.163 0 31.5L0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0L31.5 0C32.163 0 32.7989 0.263392 33.2678 0.732233C33.7366 1.20107 34 1.83696 34 2.5V2.5ZM10 13H5V29H10V13ZM10.45 7.5C10.4526 7.12179 10.3807 6.74677 10.2384 6.39634C10.0961 6.04591 9.88621 5.72695 9.62063 5.45765C9.35505 5.18836 9.03903 4.97402 8.69062 4.82686C8.3422 4.67971 7.96821 4.60262 7.59 4.6H7.5C6.73087 4.6 5.99325 4.90553 5.44939 5.44939C4.90553 5.99325 4.6 6.73087 4.6 7.5C4.6 8.26913 4.90553 9.00675 5.44939 9.55061C5.99325 10.0945 6.73087 10.4 7.5 10.4V10.4C7.87824 10.4093 8.2546 10.344 8.60758 10.2078C8.96057 10.0716 9.28326 9.86717 9.55721 9.60622C9.83117 9.34527 10.051 9.03289 10.2042 8.68694C10.3574 8.34099 10.4409 7.96824 10.45 7.59V7.5ZM29 19.28C29 14.47 25.94 12.6 22.9 12.6C21.9046 12.5502 20.9136 12.7622 20.0258 13.2149C19.1379 13.6676 18.3843 14.3451 17.84 15.18H17.7V13H13V29H18V20.49C17.9277 19.6184 18.2023 18.7535 18.764 18.0832C19.3257 17.4129 20.1292 16.9913 21 16.91H21.19C22.78 16.91 23.96 17.91 23.96 20.43V29H28.96L29 19.28Z"
              fill="#0A66C2"
            />
          </g>
          <defs>
            <clipPath id="clip0_34_790">
              <rect width="34" height="34" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  };

  const Home = () => {
    return (
      <div
        onClick={() => setActive("/")}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          active === "/" ? "" : "opacity-60"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 9V11H21V18C21 19.7 19.7 21 18 21H14V15H10V21H6C4.3 21 3 19.7 3 18V11H1V9L12 2L23 9Z"
            fill="black"
            // fill-opacity="0.6"
          />
          <path d="M20 2H17V5.2L20 7.1V2Z" fill="black" fill-opacity="0.9" />
        </svg>
        {/* <p className="text-xs font-semibold">Home</p> */}
        <Label title="Home" />
      </div>
    );
  };

  const MyNetwork = () => {
    return (
      <div
        onClick={() => setActive("/mynetwork")}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          active === "/mynetwork" ? "" : "opacity-60"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16V22H3V16C3 14.3 4.3 13 6 13H9C10.7 13 12 14.3 12 16ZM17.5 13C19.4 13 21 11.4 21 9.5C21 7.6 19.4 6 17.5 6C15.6 6 14 7.6 14 9.5C14 11.4 15.6 13 17.5 13ZM18.5 15H16.5C15.1 15 14 16.1 14 17.5V22H21V17.5C21 16.1 19.9 15 18.5 15ZM7.5 2C5 2 3 4 3 6.5C3 9 5 11 7.5 11C10 11 12 9 12 6.5C12 4 10 2 7.5 2Z"
            fill="black"
            // fill-opacity="0.6"
          />
        </svg>
        {/* <p className="text-xs font-semibold">My Network</p> */}
        <Label title="My Network" />
      </div>
    );
  };

  const Jobs = () => {
    return (
      <div
        onClick={() => setActive("/jobs")}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          active === "/jobs" ? "" : "opacity-60"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 6V5C17 3.3 15.7 2 14 2H10C8.3 2 7 3.3 7 5V6H2V10C2 11.7 3.3 13 5 13H19C20.7 13 22 11.7 22 10V6H17ZM9 5C9 4.4 9.4 4 10 4H14C14.6 4 15 4.4 15 5V6H9V5ZM19 14C20.2 14 21.3 13.5 22 12.6V17C22 18.7 20.7 20 19 20H5C3.3 20 2 18.7 2 17V12.6C2.7 13.5 3.8 14 5 14H19Z"
            fill="black"
            // fill-opacity="0.6"
          />
        </svg>

        {/* <p className="text-xs font-semibold">Jobs</p> */}
        <Label title="Jobs" />
      </div>
    );
  };

  const Messaging = () => {
    return (
      <div
        onClick={() => setActive("/messages")}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          active === "/messages" ? "" : "opacity-60"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 3H8C6.14348 3 4.36301 3.77847 3.05025 5.16416C1.7375 6.54984 1 8.42923 1 10.3889C1 12.3485 1.7375 14.2279 3.05025 15.6136C4.36301 16.9993 6.14348 17.7778 8 17.7778H12V22L20.16 16.3106C21.0512 15.639 21.7751 14.7495 22.2697 13.7183C22.7643 12.687 23.0148 11.5446 23 10.3889C23 8.42923 22.2625 6.54984 20.9497 5.16416C19.637 3.77847 17.8565 3 16 3ZM8 11.7083C7.75277 11.7083 7.5111 11.631 7.30554 11.486C7.09998 11.341 6.93976 11.1349 6.84515 10.8938C6.75054 10.6527 6.72579 10.3874 6.77402 10.1315C6.82225 9.87553 6.9413 9.64043 7.11612 9.4559C7.29093 9.27137 7.51366 9.14571 7.75614 9.0948C7.99861 9.04389 8.24995 9.07002 8.47835 9.16988C8.70676 9.26975 8.90199 9.43886 9.03934 9.65585C9.17669 9.87283 9.25 10.1279 9.25 10.3889C9.25 10.7388 9.1183 11.0744 8.88388 11.3219C8.64946 11.5693 8.33152 11.7083 8 11.7083ZM12 11.7083C11.7528 11.7083 11.5111 11.631 11.3055 11.486C11.1 11.341 10.9398 11.1349 10.8452 10.8938C10.7505 10.6527 10.7258 10.3874 10.774 10.1315C10.8222 9.87553 10.9413 9.64043 11.1161 9.4559C11.2909 9.27137 11.5137 9.14571 11.7561 9.0948C11.9986 9.04389 12.2499 9.07002 12.4784 9.16988C12.7068 9.26975 12.902 9.43886 13.0393 9.65585C13.1767 9.87283 13.25 10.1279 13.25 10.3889C13.25 10.7388 13.1183 11.0744 12.8839 11.3219C12.6495 11.5693 12.3315 11.7083 12 11.7083ZM16 11.7083C15.7528 11.7083 15.5111 11.631 15.3055 11.486C15.1 11.341 14.9398 11.1349 14.8452 10.8938C14.7505 10.6527 14.7258 10.3874 14.774 10.1315C14.8222 9.87553 14.9413 9.64043 15.1161 9.4559C15.2909 9.27137 15.5137 9.14571 15.7561 9.0948C15.9986 9.04389 16.2499 9.07002 16.4784 9.16988C16.7068 9.26975 16.902 9.43886 17.0393 9.65585C17.1767 9.87283 17.25 10.1279 17.25 10.3889C17.25 10.7388 17.1183 11.0744 16.8839 11.3219C16.6495 11.5693 16.3315 11.7083 16 11.7083Z"
            fill="black"
            // fill-opacity="0.6"
          />
        </svg>

        {/* <p className="text-xs font-semibold">Messaging</p> */}
        <Label title="Messaging" />
      </div>
    );
  };

  const Notifications = () => {
    return (
      <div
        onClick={() => setActive("/notifications")}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          active === "/notifications" ? "" : "opacity-60"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7 19C13.9 19.3 14 19.6 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 19.6 10.1 19.3 10.3 19H2V18C2 17 2.4 16.1 3.2 15.2L4.2 14H19.9L20.9 15.2C21.7 16.2 22.1 17.1 22.1 18V19H13.7ZM18.2 7.4C17.8 4.3 15.1 2 12 2C8.9 2 6.2 4.3 5.8 7.4L5 13H19L18.2 7.4Z"
            fill="black"
            // fill-opacity="0.6"
          />
        </svg>

        {/* <p className="text-xs font-semibold">Notifications</p> */}
        <Label title="Notifications" />
      </div>
    );
  };

  const Account = () => {
    return (
      <div className="flex flex-col justify-center items-center ">
        <img
          src="https://picsum.photos/50"
          alt=""
          className="w-[24px] h-[24px] rounded-full"
        />

        {/* <p className="text-xs font-semibold">Me</p> */}
        <Label title="Me" />
      </div>
    );
  };

  const Work = () => {
    return (
      <div
        onClick={() => setActive("/work")}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          active === "/work" ? "" : "opacity-60"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10H14V14H10V10ZM10 21H14V17H10V21ZM3 14H7V10H3V14ZM3 21H7V17H3V21ZM3 7H7V3H3V7ZM17 14H21V10H17V14ZM17 3V7H21V3H17ZM10 7H14V3H10V7ZM17 21H21V17H17V21Z"
            fill="#000"
            // fill-opacity="0.6"
          />
        </svg>

        {/* <p className="text-xs font-semibold">Work</p> */}
        <Label title="Work" />
      </div>
    );
  };

  return (
    <div className="fixed shadow-md z-20 py-2 w-full bg-white lg:px-[150px] px-2 flex flex-row items-center lg:justify-between justify-around">
      <div className=" flex flex-row items-center lg:gap-2">
        {/* Logo */}
        <Linkedin />

        {/* input wrapper */}
        <div className="lg:flex hidden flex-row p-1 items-center gap-1 bg-grayLight rounded-md w-[280px] pl-3 ">
          <SearchIcon size="w-[18px] h-[18px] " />
          <input
            placeholder="Search"
            className="outline-none bg-grayLight text-sm p-1 placeholder:font-sansSemibold placeholder:text-gray place"
          />
        </div>
      </div>

      <div className="flex flex-row items-center gap-6">

        
        <Link to="/">
          <Home />
        </Link>

        <Link to="/mynetwork">
          <MyNetwork />
        </Link>

        <Link to="/jobs">
          <Jobs />
        </Link>

        <Link to="/messages">
          <Messaging />
        </Link>

        <Link to="/notifications">
          <Notifications />
        </Link>

        <Link to="/account">
          <Account />
        </Link>

        <Link to="/work">
          <Work />
        </Link>
      </div>
    </div>
  );
}

export default Header;
