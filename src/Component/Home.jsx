import React from "react";
import Lefbar from "./Leftbar";
import Middlebar from "./Middlebar";
import Rightbar from "./Rightbar";
import "../Styles/home.css"
import "../Styles/MediaQuery.css"
import Navbar from "./Navbar";

function Home() {
  return (<>
    <Navbar/>
    <div className="main">
      <div className="homeContainer">
          <Lefbar/>
          <Middlebar/>
          <Rightbar/>
      </div>
    </div>
    </>
  );
}

export default Home;
