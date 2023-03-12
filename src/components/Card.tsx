import React, { useState } from "react";
import connect from "../assets/icons/connect.svg";
import time from "../assets/icons/time.svg";

import Button from "./Button";
import { showToastMessage } from "./pages/MyNetwork";

import { Backdrop, Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import upload from '../assets/images/upload_image.png'

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fcfcfc",
};

function Card() {
  const [status, setStatus] = useState("connect");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className={`lg:w-[180px] md:w-[180px] w-[165px] m-auto text-center rounded-lg shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-center items-center border border-[#dfdfdf]`}
      >
        {/* background */}
        <img
          src={`https://picsum.photos/200?id=${Math.random() * 10}`}
          alt="bg"
          className="h-[75px] w-full rounded-tl-lg rounded-tr-lg"
        />
        {/* profile pic */}
        <img
          src={`https://picsum.photos/200?id=${Math.random()*10}`}
          // src={`https://source.unsplash.com/random/?people?id=${Math.random()*10}`}
          // src={`https://loremflickr.com/200/200?id=${Math.random() * 10}`}
          alt="profile"
          className="w-[90px] h-[90px] rounded-full relative top-[-40px] border-2 border-white"
        />

        <div className="relative bottom-[30px] mb-[-10px]">
          <p className="text-base font-sansSemibold">John Connor</p>
          <p className="text-sm text-gray">Frontend Developer</p>

          <p className="text-xs text-gray py-[10px]"> 13 mutual connections</p>
          {status === "connect" && (
            <Button
              onClick={() => {
                setStatus("pending");
                showToastMessage("Invitation has been sent", "success");
              }}
              label="Connect"
              icon={
                <img
                  className="w-[16px] h-[16px]"
                  src={connect}
                  alt={connect}
                />
              }
            />
          )}

          {status === "pending" && (
            <Button
              onClick={() => {
                handleOpen();
              }}
              label="Pending"
              variant="secondary"
              icon={<img className="w-[16px] h-[16px]" src={time} alt={time} />}
            />
          )}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={style}
          style={{
            borderRadius: "8px",
            outline: "none",
          }}
        >
          <div className="w-[336px]">
            <div className="flex flex-row justify-between items-center p-4 border-b border-grayLight">
              <p className="text-lg ">Withdraw invitation</p>
              <CloseIcon
                onClick={handleClose}
                sx={{ color: "#666666", cursor: "pointer" }}
              />
            </div>
            <div className="border-b border-grayLight py-3 px-4">
              <p className="text-[15px]">
                If you withdraw now, you won’t be able to resend to this person
                for up to 3 weeks.
              </p>
            </div>

            <div className="flex flex-row justify-end items-center p-4 gap-3">
              <Button label="Cancel" onClick={handleClose} />
              <Button
                label="Withdraw"
                onClick={() => {
                  setStatus("connect");
                  showToastMessage('Invitation has been withdrawn.','info')
                  handleClose();
                }}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Card;
