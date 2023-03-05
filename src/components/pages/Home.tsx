import React from "react";

function Home() {
  return (
    <div className="grid grid-flow-col w-[1190px] m-auto pt-5">

      <div className="w-[270px] bg-white rounded-lg h-[500px] shadow-md">
        <p>Profile Card</p>
      </div>

      <div className="w-[570px] bg-white rounded-lg shadow-md h-[100vh]">
        <p>Feeds</p>
      </div>

      <div className="w-[270px] bg-white rounded-lg h-[500px] shadow-md">
        <p>Linkedin News</p>
      </div>
      
    </div>
  );
}

export default Home;
