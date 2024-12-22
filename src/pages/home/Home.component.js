import React from "react";
import Banner from "../../assets/banner1.png";
import Login from "../login/Login.component";

const Home = () => {
  return (
    <div>
      <div
        className="h-[236px] w-[100%] "
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <Login />
    </div>
  );
};

export default Home;
