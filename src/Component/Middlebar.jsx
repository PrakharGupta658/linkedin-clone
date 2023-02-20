import React, { useContext, useRef, useState } from "react";
import "../Styles/Middlebar.css";
import "../Styles/MediaQuery.css";
import {
  faImage,
  faNewspaper,
  faToolbox,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "./Post";
import { sndUserPhoto } from "./Context";

const NAVBAR_ICONS = [
  {
    icon: <FontAwesomeIcon className="fa-solid photo" icon={faImage} />,
    text: "Photo",
  },
  {
    icon: <FontAwesomeIcon className="fa-solid video" icon={faVideo} />,
    text: "Video",
  },
  {
    icon: <FontAwesomeIcon className="fa-solid job" icon={faToolbox} />,
    text: "Job",
  },
  {
    icon: <FontAwesomeIcon className="fa-solid article" icon={faNewspaper} />,
    text: "Write aritcle",
  },
];

function Middlebar() {
  const [textpost, setTextpost] = useState();
  const [post,setPost]=useState([]);
  const refUse = useRef();
  const userPhoto = useContext(sndUserPhoto);

  const handelTextPost = (e) => {
    e.preventDefault();
    setPost((prevValue) => [...prevValue, textpost]);
    setTextpost("")
    
  };
  return (
    <>
      <div className="middleSide">
        <div className="top">
          <div className="searchDiv">
            <img src={userPhoto} alt="prakhar" />
            <form onSubmit={handelTextPost} style={{width:"100%"}}>
            <input
              className="postInput"
              type="text"
              placeholder="Start a post"
              ref={refUse}
              value={textpost}
              onChange={e=>setTextpost(e.target.value)}
            />
            <input type="submit"  style={{display:"none"}}/>
            </form>
          </div>

          <div className="buttons">
            {NAVBAR_ICONS.map((el, i) => (
              <NavbarIcons key={i} icon={el.icon} text={el.text} />
            ))}
          </div>
        </div>
        {post.map((el, i) => (
              <Post
                key={i}
                textValue = {el}
              />
            ))}
      </div>
    </>
  );
}

const NavbarIcons = (props) => {
  return (
    <div className="btnicon">
      <span>{props.icon}</span>
      <span className="icontext">{props.text}</span>
    </div>
  );
};

export default Middlebar;
