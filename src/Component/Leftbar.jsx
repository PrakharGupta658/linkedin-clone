import React, { useContext } from "react";
import "../Styles/Sidebar.css";
import "../Styles/MediaQuery.css";
import Mypic from "../image/prakhar.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faSquare,
  faEarth,
  faHeart,
  faLightbulb,
  faThumbsUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import sndUserName from "./Context";
import { sndUserPhoto } from "./Context";

function Lefbar() {
  const userName = useContext(sndUserName);
  const userPhoto = useContext(sndUserPhoto);
  console.log("left bar " , userPhoto)

  return (
    <>
      <div className="leftSide">
        <div className="profileDiv">
          <div className="backGroundDiv">
            <img
              src="https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg"
              className="bgImg"
              alt="backgroung"
            />
            <img src={userPhoto} alt="prakhar" className="avatarImg" />
            <h4 className="avatarName">{userName}</h4>
            <p className="avatarAbout">
              Appearing Full-Stack Developer. Learning from Newton School
            </p>
            <div className="hr"></div>
            <div className="viewes">
              <h3>Who's viewed your profile </h3>
              <h4>400</h4>
            </div>
            <div className="viewes">
              <h3>Views of your video </h3>
              <h4>850</h4>
            </div>
            <div className="hr"></div>
            <div className="premium">
              <p>Access exclusive tools & insights</p>
              <h4>
                <FontAwesomeIcon className="squire" icon={faSquare} /> Try
                Premium for free
              </h4>
            </div>
            <div className="hr"></div>
            <div className="items">
              <h4>
                <FontAwesomeIcon className="bookmark" icon={faBookmark} />
                My items
              </h4>
            </div>
          </div>
        </div>
        <div className="groups">
          <h4 className="h4Color">Groups</h4>
          <div className="events">
            <h4 className="h4Color">Events</h4>
            <h5>+</h5>
          </div>
          <h4 className="h4Color">Followed Hashtags</h4>
          <div className="hr"></div>
          <h4 className="discover">Discover more</h4>
        </div>
      </div>
    </>
  );
}

export default Lefbar;
