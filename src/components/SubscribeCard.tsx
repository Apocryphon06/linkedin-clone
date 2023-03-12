import React, { useState } from "react";
import tick from "../assets/icons/tick.svg";
import Button from "./Button";
import { showToastMessage } from "./pages/MyNetwork";

function SubscribeCard() {
  const [subsribe, setSubscribe] = useState(false);

  return (
    <div className=" lg:w-[250px] md:w-[240px] w-[343px] m-auto rounded-lg shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-center items-start border border-[#dfdfdf]">
      {/* background */}
      <img
        src={`https://picsum.photos/200?id=${Math.random() * 10}`}
        // src={`https://source.unsplash.com/random/?people?id=${Math.random()*10}`}
        alt="bg"
        className="h-[75px] lg:w-[250px] md:w-[240px] w-[343px] rounded-tl-lg rounded-tr-lg "
      />
      {/* profile pic */}
      <div className="relative top-[-40px] flex flex-row items-center left-[10px]">
        <img
          src={`https://loremflickr.com/200/200?id=${Math.random() * 10}`}
          alt="logo_image"
          className="w-[90px] h-[90px]  border-2 border-white"
        />
        <p className="text-xs text-gray hover:underline font-sansMedium relative top-[10px] left-[30px]">
          Published monthly
        </p>
      </div>

      <div className="relative bottom-[30px] mb-[-10px] p-2 text-start">
        <div className="hover:underline cursor-pointer">
          <p className="text-base font-sansSemibold">UX Insight of the week</p>
          <p className="text-sm text-gray  font-sansMedium">
            Need quick inspiration and ideas?
            <br />
            Subscribe to UX Insight of the <br /> Week to breath new life into
            your..
          </p>
          <p className="text-xs text-gray py-[10px] font-sansSemibold">
            {" "}
            UX Magazine
          </p>
        </div>
        <div className="grid grid-flow-row justify-center items-center">
          {!subsribe && (
            <Button
              onClick={() => {
                setSubscribe(true);
                showToastMessage(
                  "Subscribed. You’ll be notified when there’s a new article.",
                  "success"
                );
              }}
              label="Subscribe"
              padding="lg:px-[70px] md:px-[70px] px-[70px]"
              //   icon={
              //     <img className="w-[16px] h-[16px]" src={connect} alt={connect} />
              //   }
            />
          )}
          {subsribe && (
            <Button
              onClick={() => {
                setSubscribe(false);
                showToastMessage(
                  "You have unsubscribed from this article.",
                  "info"
                );
              }}
              label="Subscribed"
              variant="secondary"
              padding="lg:px-[55px] md:px-[55px] px-[55px]"
              icon={<img className="w-[16px] h-[16px]" src={tick} alt={tick} />}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SubscribeCard;
