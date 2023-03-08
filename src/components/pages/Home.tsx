import News from "../News";
import ProfileCard from "../ProfileCard";

function Home() {
  return (
    <div className="grid grid-flow-col items-start justify-center gap-[27px] m-auto pt-[80px]">
      {/* Profile info card & Recents */}
      <ProfileCard />
      <div className="lg:w-[570px] w-screen bg-white rounded-lg shadow-md h-[100vh]">
        <p>Feeds</p>
      </div>
      {/* Linkedin News & Explore Opportunity Ad Card */}
      <News />
    </div>
  );
}

export default Home;
