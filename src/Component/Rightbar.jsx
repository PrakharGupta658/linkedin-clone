import React from "react";
import "../Styles/Rightbar.css";
import "../Styles/footer.css";
import "../Styles/MediaQuery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const NewsData = [
  {
    title:"Fostering diverse workplaces ",
    news: "1d ago • 1,666 readers",
  },
  {
    title:"STEM talent in demand",
    news: "1d ago • 1,666 readers",
  },
  {
    title:"Firms widen hunt for freshers",
    news: "23h ago • 342 readers",
  },
  {
    title:"Listeners hit pause on podcasts",
    news: "21h ago • 310 readers",
  },
  {
    title:"Firms widen hunt for freshers",
    news: "23h ago • 342 readers",
  },
  {
    title:"Firms widen hunt for freshers",
    news: "23h ago • 342 readers",
  },
  
];
function Rightbar() {
  return (
    <>
      <div className="rightSide">
        <div className="rightContainer">
          <h3 className="connectHeading">Linked In News</h3>
          {/* <hr className="connectLine" /> */}
          {NewsData.map((el, i) => (
                <LinkedinNews
                  key={i}
                  title={el.title}
                  news={el.news}
                  point="◦"
                />
              ))}
          
          <div className="showMorediv">
            <h4>
              Show more <FontAwesomeIcon icon={faAngleDown} />{" "}
            </h4>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  );
}

  const LinkedinNews = (props) => {
    return (
      <div className="whoToConnect_container">
        <div className="account">
          <div className="img_src">
            {props.point}
          </div>
          <div className="connect_user_name">
            <h3>{props.title}</h3>
            <h4>{props.news}</h4>
          </div>
        </div>
      </div>
    );
  };

export default Rightbar;
