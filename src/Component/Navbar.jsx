import "../Styles/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faGraduationCap,
  faHouseChimney,
  faSortDown,
  faToolbox,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import sndUserName, { sndUserPhoto } from "./Context";
import { auth } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const userName = useContext(sndUserName);
  const userPhoto = useContext(sndUserPhoto);
  const navigate = useNavigate();

  const handleLogOut=()=>{
      signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
        }
  return (
    
    <>
      <nav>
        <div className="navContainer">
          <div className="navLeftSide">
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                alt="linkedin logo"
              />
            </div>
            <input className="inputField" type="text" placeholder="Search" />
          </div>
          <div className="navMiddleSide">
            <Link to="/" className="link">
              <FontAwesomeIcon className="fa-icon" icon={faHouseChimney} />
              <h4 className="text">Home</h4>
            </Link>

            <Link to="/" className="link">
              <FontAwesomeIcon className="fa-icon" icon={faUserGroup} />
              <h4 className="text">My Network</h4>
            </Link>
            <Link to="/" className="link">
              <FontAwesomeIcon className="fa-icon" icon={faToolbox} />
              <h4 className="text">Jobs</h4>
            </Link>
            <Link to="/" className="link">
              <FontAwesomeIcon className="fa-icon" icon={faCommentDots} />
              <h4 className="text">Messaging</h4>
            </Link>
            <Link to="/" className="link">
              <FontAwesomeIcon className="fa-icon" icon={faBell} />
              <h4 className="text">Notification</h4>
            </Link>

            <a onClick={handleLogOut} style={{ textDecoration:"none" , color:"gray"}}>
            <div className="navAvatarDiv">
              {/* <FontAwesomeIcon icon="fa-solid fa-user-large" /> */}
              {/* <FontAwesomeIcon className="fa-icon" icon={faUserLarge} /> */}

              <img
                className="avatar"
                src={userPhoto}
                alt="Prakhar"
              />
              <h4 className="avatar-text text">LogOut
              </h4>
            </div>
            </a>
          </div>
          <div style={{height:"40px" , border:"1px solid gray" , marginLeft:"30px"}}>

          </div>
          <div className="navRightSide">
            <div>
              <FontAwesomeIcon className="fa-icon" icon={faGraduationCap} />
              <h4 className="text">Works</h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
