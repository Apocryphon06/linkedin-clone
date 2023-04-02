import { MoreHoriz } from "@mui/icons-material";

function Notifications() {
  return (
    <div className="grid grid-flow-col items-start justify-center gap-[27px] m-auto lg:pt-[70px] pt-[50px]">
      {/* Profile info card & Recents */}
      {/* <ProfileCard /> */}

      <div className="w-[220px] lg:flex hidden flex-col bg-white rounded-lg shadow-md p-5">
        <p className="font-sansSemibold text-base">
          Manage your <br /> Notifications
        </p>
        <p className="text-sm font-sansSemibold mt-[5px] text-linkedinBlue hover:underline cursor-pointer">
          View Settings
        </p>
      </div>

      {/* Feed */}
      {/* <Feed /> */}
      <div className="lg:w-[540px] w-screen  overflow-y-auto bg-white rounded-lg shadow-md mb-[10px]">
        {[1, 1, 1, 1].map((item: any) => (
          <div className="flex items-center gap-5 p-5 border-b border-grayLight hover:bg-grayLight cursor-pointer">
            <img
              className="w-[62px] h-[62px] rounded-full"
              src={`https://picsum.photos/200?id=${Math.random() * 10}`}
              alt="connection_img"
            />
            <p className="text-sm">
              <span className="font-sansBold">Aliquip</span> ut mollit minim
              culpa adipisicing ex aliqua nulla consectetur nostrud labore
              fugiat in deserunt. Ullamco ad do consectetur veniam culpa sunt
              aute ad tempor ut.
            </p>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xs font-sansMedium opacity-80">4h</p>
              <MoreHoriz sx={{ color: "#000", opacity: "80%%" }} />
            </div>
          </div>
        ))}
      </div>

      <div className="w-[270px] lg:flex flex-col hidden p-4 bg-white rounded-lg shadow-md">
        <p className="text-xs text-center text-gray font-sansMedium">
          Get the latest jobs and industry news
        </p>

        <div className="flex items-center gap-5 justify-center my-2">
          <img
            className="rounded-full w-[72px] h-[72px]"
            src={`https://picsum.photos/200?id=${Math.random() * 10}`}
            alt="profile_"
          />
          <img
            className="rounded-full w-[72px] h-[72px]"
            src={`https://picsum.photos/200?id=${Math.random() * 10}`}
            alt="vendor_"
          />
        </div>

        <p className="text-center text-sm">
          Hrithik, explore relevant opportunities with{" "}
          <span className="font-sansBold">Stratus Technologies</span>
        </p>

        <div className="flex justify-center items-center">
          <button className="border border-linkedinBlue hover:border-2 font-sansSemibold hover:border-linkedinBlue hover:bg-grayLight text-linkedinBlue rounded-[90px] w-[162px] h-[32px] text-base my-1">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
