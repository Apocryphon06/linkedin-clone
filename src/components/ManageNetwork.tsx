import React from "react";
import Button from "./Button";

import connections from "../assets/icons/connections.svg";
import contact from "../assets/icons/contact.svg";

import following from "../assets/icons/following.svg";
import events from "../assets/icons/events.svg";

import groups from "../assets/icons/groups.svg";
import hashtag from "../assets/icons/hashtag.svg";

import newsletter from "../assets/icons/newsletter.svg";
import pages from "../assets/icons/pages.svg";
import Input from "./Input";

const network = [
  {
    id: 1,
    name: "Connections",
    icon: connections,
    count: "135",
  },
  {
    id: 2,
    name: "Contact",
    icon: contact,
    count: "859",
  },
  {
    id: 3,
    name: "Following & followers",
    icon: following,
  },
  {
    id: 4,
    name: "Groups",
    icon: groups,
  },
  {
    id: 5,
    name: "Events",
    icon: events,
  },
  {
    id: 6,
    name: "Pages",
    icon: pages,
    count: "7",
  },
  {
    id: 7,
    name: "Newsletters",
    icon: newsletter,
    count: "5",
  },
  {
    id: 8,
    name: "Hashtags",
    icon: hashtag,
    count: "2",
  },
];

function ManageNetwork() {
  return (
    <div className="w-[300px] bg-white rounded-lg shadow-md lg:block hidden">
      <div className="p-4">
        <p className="text-base ">Manage my network</p>
      </div>

      {network.map((item: any) => (
        <div className="px-4 py-2 flex flex-row justify-between items-center hover:bg-grayLight cursor-pointer">
          <div className="flex flex-row items-center gap-5">
            <img
              className="w-[24px]  h-[24px]"
              src={item?.icon}
              alt={item?.icon}
            />
            <p className="text-base text-gray">{item?.name}</p>
          </div>

          <p className="text-base text-gray">{item?.count}</p>
        </div>
      ))}
      {/* Ad  */}
      <div className="p-4 mt-[10px] border-t border-grayLight">
        <p className="text-xs text-gray font-sansLight text-center">
          Get the latest jobs and industry news
        </p>
        <div className="flex flex-row justify-center gap-5 items-center py-4">
          <div>
            <img
              src="https://picsum.photos/200?id=78"
              alt="profile_pic"
              className="w-[60px] h-[60px] rounded-full cursor-pointer mr-auto ml-auto"
            />
          </div>
          <div>
            <img
              src="https://picsum.photos/200?id=99"
              alt="profile_pic"
              className="w-[60px] h-[60px] cursor-pointer mr-auto ml-auto"
            />
          </div>
        </div>

        <p className="text-sm text-gray font-sansLight text-center">
          Hrithik, explore relevant opportunities <br /> with{" "}
          <span className="font-sansBold">XYZ</span>
        </p>
        <div className="flex justify-center item-center mt-[10px]">
          <Button label="Follow" />
        </div>
      </div>

      <div className="p-4 mt-[10px] border-t border-grayLight text-center">
        <p className="text-base">Add personal contacts</p>
        <p className="text-xs text-gray">
          We’ll periodically import and store your contacts to help you and
          others connect. You choose who to connect to and who to invite.
          <span className="text-linkedinBlue font-sansSemibold hover:underline cursor-pointer">
            Learn more
          </span>
        </p>
        <br />
        <input
          type="email"
          value="hrithikchandrashekar@gmail.com"
          className="outline-linkedinBlue text-[14px] rounded-md w-full bg-none border p-2 py-1 border-gray mb-[10px]"
        />
        {/* <Input type="email" value="hrithikchandrashekar@gmail.com" /> */}
        <Button label="Continue" />
      </div>
    </div>
  );
}

export default ManageNetwork;
