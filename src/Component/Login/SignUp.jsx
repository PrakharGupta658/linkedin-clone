import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import Logo from "./logo.png";
import "./Login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [BtnDisable, SetBtnDisable] = useState(false);

  const handelLoginAccount = () => {
    // e.preventDefault();

    if (!name || !email || !password) {
      setErrorMsg("!All fields are mandatory");
      return;
    }
    SetBtnDisable(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        SetBtnDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
        toast.success("Login Successfully", {
          position: "top-center",
          autoClose: 1900,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // console.log("user is" , user);
        navigate("/home");
      })
      .catch((err) => {
        setErrorMsg(err);
        navigate("/");
        SetBtnDisable(false);
        alert("already signup")
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1900}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="loginContainer">
        <div className="loginscreen">
          <img src={Logo} alt="shubh" style={{ marginTop: "10px" }} />
          <p style={{ color: "red" }}>{errorMsg}</p>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Profile picture Url (not mandatory)"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            <button
              type="submit"
              style={{ borderRadius: "10px" }}
              className="btnlg"
              onClick={handelLoginAccount}
              disabled={BtnDisable}
            >
              SignUp
            </button>
            <h4>
              Already a memeber ?{" "}
              <NavLink to="/" className="navlink">
                <span>Login Here</span>
              </NavLink>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
