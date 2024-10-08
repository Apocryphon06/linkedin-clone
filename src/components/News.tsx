import React from 'react'

const InfoIcon = () => {
    return (
      <div className="relative left-[110px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2ZM9 10V12H7.5C7.10218 12 6.72064 11.842 6.43934 11.5607C6.15804 11.2794 6 10.8978 6 10.5C6.00569 10.329 6.03947 10.1601 6.1 10L7.18 7H9.31L8.22 10H9ZM9 6.25C8.75277 6.25 8.5111 6.17669 8.30554 6.03934C8.09998 5.90199 7.93976 5.70676 7.84515 5.47835C7.75054 5.24995 7.72579 4.99861 7.77402 4.75614C7.82225 4.51366 7.9413 4.29093 8.11612 4.11612C8.29093 3.9413 8.51366 3.82225 8.75614 3.77402C8.99861 3.72579 9.24995 3.75054 9.47835 3.84515C9.70676 3.93976 9.90199 4.09998 10.0393 4.30554C10.1767 4.5111 10.25 4.75277 10.25 5C10.25 5.16415 10.2177 5.3267 10.1548 5.47835C10.092 5.63001 9.99996 5.76781 9.88388 5.88388C9.76781 5.99996 9.63001 6.09203 9.47835 6.15485C9.3267 6.21767 9.16415 6.25 9 6.25Z"
            fill="#000"
            // fill-opacity="0.6"
          />
        </svg>
      </div>
    );
  };
  

function News() {
  return (
    <div className="w-[270px] lg:flex flex-col hidden">
        {/* Linkedin News */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex flex-row items-center">
            <p className="text-base font-sansSemibold">Linkedin News</p>
            <InfoIcon />
          </div>

          <div className="px-4">
            <ul className="list-disc text-gray">
              {[1, 1, 1, 1, 1].map((item: any) => (
                <li className="py-1">
                  <p className="text-xs font-sansSemibold text-black">
                    This week's top newsletters
                  </p>
                  <p className="text-xs text-gray">Top news 2,164 readers</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm font-sansSemibold text-gray hover:bg-grayLight inline-block p-1 ml-4 rounded-md cursor-pointer">
            Show more
          </p>
        </div>
        {/* Ad */}
        <div className="py-4 px-2 mt-[10px] bg-white rounded-lg shadow-md">
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
            Hrithik, explore relevant opportunities with{" "}
            <span className="font-sansBold">XYZ</span>
          </p>
        </div>
      </div>
  )
}

export default News