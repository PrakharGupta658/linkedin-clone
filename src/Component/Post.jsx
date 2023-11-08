import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTurnRight,
  faCommentDots,
  faEarth,
  faHeart,
  faLightbulb,
  faPaperPlane,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import sndUserName, { sndUserPhoto } from "./Context";
const icons = [
  {
    icon: <FontAwesomeIcon icon={faThumbsUp} />,
    text: "Like",
  },
  {
    icon: <FontAwesomeIcon icon={faCommentDots} />,
    text: "Comment",
  },
  {
    icon: <FontAwesomeIcon icon={faArrowTurnRight} />,
    text: "Share",
  },
  {
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
    text: "Send",
  },
];

function Post(props) {
  const userPhoto = useContext(sndUserPhoto);
  const userName = useContext(sndUserName);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const [like, setLike] = useState("");
  const [comment, setComment] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [displayVal, SetdisplayVal] = useState("none");

  const handelLike = (icn) => {
    if (icn === "Like") {
      if (like === "") {
        setLike(1);
        console.log("comment");
      } else {
        setLike("");
      }
    }

    if (icn === "Comment") {
      if(displayVal === "none"){
      SetdisplayVal("block")
      }else{
        SetdisplayVal("none")
      }
    }
  };

  const handelTextPost = (e) => {
    e.preventDefault();
    setComment((prev) => [prev, commentText, ","]);
    setCommentText("");
    SetdisplayVal("none")

  };
  return (
    <>
      <div className="postsMainDiv">
        <div className="useDetails">
          <div className="avatarDetails">
            <img className="userAvatar" src={userPhoto} alt="" />
            <div style={{ marginLeft: "5px" }}>
              <h4>{userName}</h4>
              <p>my post</p>
              <div className="postime">
                <p>
                  {currentDay}-{currentMonth + 1}-{currentYear}
                </p>
                <div className="dot"></div>
                <FontAwesomeIcon className="earthIcon" icon={faEarth} />
              </div>
            </div>
          </div>
          <div className="followbtn">
            <p>+</p>
            <h5>Follow</h5>
          </div>
        </div>
        <div className="aboutPost">
          <p>🌟 {props.textValue} 🌟</p>
        </div>
        <div className="postPicture">
          <img
            src="https://media.licdn.com/dms/image/C5612AQHoZitHy1sFgA/article-cover_image-shrink_720_1280/0/1611846088031?e=2147483647&v=beta&t=DbiFgGOB9moKO6iizByJFRkQiLvrj1EmoAR_JWbqN8g"
            alt=""
          />
        </div>
        <div className="likes">
          <div className="likeIcon">
            <div>
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div className="lightIcon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div className="lightIcon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
          <p style={{ fontSize: "15px", fontWeight: "700" }}>
            {like}{" "}
            <span style={{ color: "gray", margin: "0px 11vw" }}>
              {" "}
              {comment}
            </span>
          </p>
        </div>
        <div className="hr"></div>
        <div className="viewerReactionMain">
          {icons.map((icn, i) => (
            <div
              key={i}
              className="viewerReaction"
              onClick={() => {
                handelLike(icn.text);
              }}
            >
              <h5
                style={{
                  color: icn.text === "Like" && like === 1 ? "#378fe9" : null,
                }}
              >
                {icn.icon}
              </h5>
              <p>{icn.text}</p>
            </div>
          ))}
        </div>

        <div className="middleSide" style={{display: displayVal}}>
          <div className="top">
            <div className="searchDiv">
              <img src={userPhoto} alt="prakhar" />
              <form onSubmit={handelTextPost} style={{ width: "100%" }}>
                <input
                  className="postInput"
                  type="text"
                  placeholder="Add a comment...."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <input type="submit" style={{ display: "none" }} />
              </form>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Post;
