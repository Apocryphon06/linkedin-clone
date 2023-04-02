import Button from "../Button";
import ManageNetwork from "../ManageNetwork";
import Card from "../Card";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubscribeCard from "../SubscribeCard";

// import { Backdrop, Box, Modal } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// // import upload from '../assets/images/upload_image.png'
// import { useState } from "react";

export const showToastMessage = (message: any, type: any) => {
  type === "success" &&
    toast.success(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  type === "info" &&
    toast.info(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  type === "error" &&
    toast.error(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
};

function MyNetwork() {
  return (
    <div className="grid lg:grid-flow-col grid-flow-row items-start justify-center gap-[27px] m-auto lg:pt-[70px] pt-[50px]">
      <ManageNetwork />

      <div className="lg:w-[804px] w-screen">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 flex flex-row justify-between items-center  ">
            <p className="text-base">Invitations</p>
            <p className="text-base text-gray font-sansSemibold p-2 hover:bg-grayLight rounded-lg cursor-pointer">
              See all 8
            </p>
          </div>

          {[1, 1, 1, 1].map((item: any) => (
            <div className="p-4 border-t border-grayLight">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center lg:gap-5 gap-2">
                  <img
                    src={`https://picsum.photos/200?id=${Math.random() * 10}`}
                    alt="invite"
                    className="lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] rounded-full cursor-pointer bg-gray"
                  />
                  <div>
                    <p className="text-base font-sansSemibold">
                      Nishchal Chandrashekar
                    </p>
                    <p className="text-sm text-gray font-sansMedium">
                      Associate Creative Director at{" "}
                      <span className="font-sansSemibold text-black">
                        Zen Sciences
                      </span>
                    </p>
                    {/* <p className="text-base font-sansMedium">Zen Sciences</p> */}
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-5 gap-2">
                  <p className="text-base font-sansSemibold text-gray px-2 py-1 hover:bg-grayLight rounded-lg cursor-pointer">
                    Ignore
                  </p>
                  <Button label="Accept" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md my-[10px]">
          <div className="p-4 flex flex-row justify-between items-center  ">
            <p className="lg:text-base  ">
              People you may know the Greater Bengaluru Area
            </p>
            <p className="lg:text-base text-sm text-gray font-sansSemibold p-2 hover:bg-grayLight rounded-lg cursor-pointer">
              See all
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 p-4 lg:gap-y-[12px] md:gap-y-1 gap-y-[6px] relative lg:left-[0px] md:left-[3px]">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2].map((item: any) => (
              <Card />
            ))}
          </div>

          <div className="p-4 flex flex-row justify-between items-center">
            <p className="lg:text-base  ">Recommended newsletters for you</p>
            <p className="lg:text-base text-sm text-gray font-sansSemibold p-2 hover:bg-grayLight rounded-lg cursor-pointer">
              See all
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 p-4 lg:gap-y-2 md:gap-y-1 gap-y-[10px] ">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2].map((item: any) => (
              <SubscribeCard />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default MyNetwork;
