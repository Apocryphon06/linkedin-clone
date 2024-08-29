import send from "../assets/icons/send.svg";
import github from "../assets/logo/github.svg";
import repost from "../assets/icons/repost.svg";
import comment from "../assets/icons/comment.svg";
import thumbsup from "../assets/icons/thumbsup.svg";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Feed() {
  return (
    <div className="lg:w-[540px] w-screen h-screen  overflow-y-auto ">
      {[1, 2, 4, 6, 22, 31].map((item: any) => (
        <div className="bg-white rounded-lg shadow-md mb-[10px]">
          <div className="flex flex-row justify-between items-center p-2 ">
            <div className="flex flex-row items-center gap-2">
              <img className="relative " src={github} alt={github} />
              <div>
                <p className="text-sm font-sansSemibold">Github</p>
                <p className="text-xs text-gray font-sansRegular">
                  43,876 followers
                </p>
                <p className="text-xs text-gray font-sansRegular">Promoted</p>
              </div>
            </div>

            <MoreHorizIcon
              sx={{
                color: "#666666",
                cursor: "pointer",
                position: "relative",
                bottom: "15px",
              }}
            />
          </div>
          {/* Content & image */}
          <div className="p-2">
            <p className="text-sm">
              Fugiat cillum aute velit culpa ex aliqua ullamco nulla et
              voluptate officia.
            </p>
            <p className="text-sm text-linkedinBlue cursor-pointer hover:underline">
              https://buff.ly/3e3QaL7
            </p>
          </div>
          <img
            className="w-full"
            // src={`https://source.unsplash.com/random/?programming?id=${Math.random()*10}`}
            src={`https://picsum.photos/540/400?id=${Math.random() * 10}`}
            alt="feed_img"
          />

          <div className="p-3 flex justify-between items-center ">
            <p className="text-xs font-sansMedium text-gray hover:underline hover:text-linkedinBlue cursor-pointer">
              873
            </p>
            <div className="flex flex-row items-center gap-2">
              <p className="text-xs font-sansMedium text-gray hover:underline hover:text-linkedinBlue cursor-pointer">
                24 comments
              </p>
              <span className="text-gray">•</span>
              <p className="text-xs font-sansMedium text-gray hover:underline hover:text-linkedinBlue cursor-pointer">
                8 reposts
              </p>
            </div>
          </div>

          <div className=" py-1 flex flex-row justify-center items-center">
            <div className="flex flex-row gap-2 items-center hover:bg-grayLight p-3 lg:px-6 cursor-pointer rounded-md">
              <img src={thumbsup} alt={thumbsup} />
              <p className="text-sm font-sansSemibold text-gray">Like</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-grayLight p-3 lg:px-6 cursor-pointer rounded-md">
              <img src={comment} alt={comment} />
              <p className="text-sm font-sansSemibold text-gray">Comment</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-grayLight p-3 lg:px-6 cursor-pointer rounded-md">
              <img className="w-[24px] h-[24px]" src={repost} alt={repost} />
              <p className="text-sm font-sansSemibold text-gray">Repost</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-grayLight p-3 lg:px-6 cursor-pointer rounded-md">
              <img src={send} alt={send} />
              <p className="text-sm font-sansSemibold text-gray">Send</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
