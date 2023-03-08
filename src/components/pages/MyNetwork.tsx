
import ManageNetwork from "../ManageNetwork";

function MyNetwork() {
  return (
    <div className="grid grid-flow-col items-start justify-center gap-[27px] m-auto lg:pt-[70px] pt-[50px]">

      <ManageNetwork/>

      <div className="lg:w-[790px] w-screen h-[500px] bg-white rounded-lg shadow-md ">
        <p>Invitations</p>
      </div>
    </div>
  );
}

export default MyNetwork;
