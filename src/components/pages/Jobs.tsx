import bookmark from "../../assets/icons/bookmark.svg";
import bell from "../../assets/icons/bell.svg";
import notepad from "../../assets/icons/notepad.svg";
import prep from "../../assets/icons/prep.svg";
import resume from "../../assets/icons/resume.svg";
import play from "../../assets/icons/play.svg";
import settings from "../../assets/icons/settings.svg";
import { nanoid } from "nanoid";

import JobListWrapper from "../JobListWrapper";

const contents = [
  {
    id: nanoid(),
    title: "Recommended for you",
    subtext: "Based on your profile and search history",
  },
  {
    id: nanoid(),
    title: "Still Hiring",
    subtext: "Jobs you may have missed",
  },
  {
    id: nanoid(),
    title: "Remote opportunities",
    subtext: "Because you expressed interest in remote work",
  },
  {
    id: nanoid(),
    title: "Hybrid opportunities",
    subtext: "Because you expressed interest in hybrid work",
  },
];

const cardList = [
  {
    id: nanoid(),
    name: "My Jobs",
    icon: bookmark,
  },
  {
    id: nanoid(),
    name: "Job Alerts",
    icon: bell,
  },
  {
    id: nanoid(),
    name: "Skill Assessments",
    icon: notepad,
  },
  {
    id: nanoid(),
    name: "Interview prep",
    icon: prep,
  },
  {
    id: nanoid(),
    name: "Resume Builder",
    icon: resume,
  },
  {
    id: nanoid(),
    name: "Job seeker guidance",
    icon: play,
  },
  {
    id: nanoid(),
    name: "Application settings",
    icon: settings,
  },
];

function Jobs() {
  return (
    <div className="grid lg:grid-flow-col grid-flow-row items-start justify-center lg:gap-[27px] m-auto lg:pt-[70px] pt-[50px]">
      <div className="lg:w-[225px] bg-white p-5 rounded-lg shadow-md lg:flex hidden flex-col gap-[25px] py-7">
        {cardList.map((item: any) => (
          <div className="flex gap-2 items-center">
            <img
              src={item?.icon}
              alt={item?.icon}
              className="w-[18px] h-[18px] opacity-70"
            />
            <p className="text-[14px] font-sansSemibold opacity-70 cursor-pointer">
              {item?.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="lg:w-[555px] w-screen bg-white rounded-lg shadow-md p-5">
          <div className="flex justify-between items-center mb-[20px]">
            <p className="text-base font-sansSemibold">Recents job searches</p>
            <p className="text-sm font-sansSemibold text-gray p-1 px-2 cursor-pointer hover:bg-grayLight rounded-md">
              Clear
            </p>
          </div>

          {[
            { name: "infeedo", count: 2 },
            { name: "zenskar", count: 5 },
            { name: "scube", count: 12 },
          ].map((item: any) => (
            <div className="border-b border-grayLight my-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <p className="text-sm font-sansSemibold">{item?.name}</p>
                <p className="text-xs font-sansSemibold text-green-700">
                  {item?.count} new
                </p>
              </div>
              <p className="text-xs text-gray font-sansMedium">India</p>
            </div>
          ))}
        </div>

        {contents.map((item: any) => (
          <JobListWrapper content={item} />
        ))}
        <div className="mb-[15px]" />
      </div>

      <div className="lg:w-[300px] bg-white rounded-lg shadow-md lg:flex flex-col hidden">
        <div className="p-5 border-b border-grayLight">
          <p className="text-base font-sansSemibold">
            Job Seeker guidance card
          </p>
          <p className="text-xs">Recommended based on your activity</p>
        </div>

        <div className="px-5 py-3 flex items-center gap-5 hover:bg-grayLight cursor-pointer border-b border-grayLight">
          <p className="text-sm font-sansSemibold">
            I want to improve my resume
          </p>
          <img
            className="w-[80px] h-[56px] rounded-md"
            src="https://picsum.photos/100"
            alt="placeholder"
          />
        </div>

        <div className="px-5 py-3">
          <p className="text-sm font-sansRegular">
            Explore our curated guide of expert-led courses, such as how to
            improve your resume and grow your network, to help you land your
            next opportunity.
          </p>
          <p className="hover:text-linkedinBlue font-sansMedium text-sm text-gray cursor-pointer mt-[10px] hover:underline">
            Show more
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
