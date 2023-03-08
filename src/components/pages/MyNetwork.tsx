import Button from "../Button";
import ManageNetwork from "../ManageNetwork";

// import connect from '../../assets/icons/connect.svg'

function MyNetwork() {
  return (
    <div className="grid grid-flow-col items-start justify-center gap-[27px] m-auto lg:pt-[70px] pt-[50px]">
      <ManageNetwork />

      <div className="lg:w-[790px] w-screen">
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
                  <img src={`https://picsum.photos/200?id=${Math.random()*10}`} alt="invite" className="lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] rounded-full cursor-pointer bg-gray" />
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

        <div className="bg-white rounded-lg shadow-md mt-[10px]">
          <div className="p-4 flex flex-row justify-between items-center  ">
            <p className="lg:text-base  ">
              People you may know the Greater Bengaluru Area
            </p>
            <p className="lg:text-base   text-gray font-sansSemibold p-2 hover:bg-grayLight rounded-lg cursor-pointer">
              See all
            </p>
          </div>

          {/* <Button label="Connect" icon={<img className="w-[16px] h-[16px]" src={connect} alt={connect}/>}/> */}
        </div>
      </div>
    </div>
  );
}

export default MyNetwork;
