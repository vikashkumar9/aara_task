import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import AboutSection from "./components/About/AboutSection";
import Features from "./components/Features/Features";
import BoardOfDirectors from "./components/BoardOfDirectors/BoardOfDirectors";
import AwardsSection from "./components/AwardsSection/AwardsSection";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import Bannerimg from "./assets/Banner2.png";

function App() {
  return (
    <>
      <Header />
      <Banner
        heading="About ValuePoint"
        description="Your first-choice digital transformation catalyst for expert digital solutions."
        bgImage={Bannerimg}
      />
      <AboutSection />
      <Features />
      <BoardOfDirectors />
      <TeamMembers />
      <AwardsSection />
    </>
  );
}
export default App;
