import News from "../News";
import Feed from "../Feed";
import ProfileCard from "../ProfileCard";


function Home() {
  return (
    <div className="grid grid-flow-col items-start justify-center gap-[27px] m-auto lg:pt-[70px] pt-[50px]">
      {/* Profile info card & Recents */}
      <ProfileCard />
      {/* Feed */}
      <Feed/>
      {/* Linkedin News & Explore Opportunity Ad Card */}
      <News />
    </div>
  );
}

export default Home;
