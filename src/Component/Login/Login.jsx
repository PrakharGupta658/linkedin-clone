import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "./logo.png";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [BtnDisable, SetBtnDisable] = useState(false);

  const handelLoginAccount = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("!Please Enter email & password");
      return;
    }
    toast.success("LogIn Successfully.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    // console.log(data);
    SetBtnDisable(true);
    // this function return promise
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log(res);
        SetBtnDisable(false);
        navigate("/home");
      })
      .catch((err) => {
        // console.log("error===",err)
        SetBtnDisable(false);
        setErrorMsg(err);
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
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              style={{ borderRadius: "10px" }}
              className="btnlg"
              onClick={handelLoginAccount}
              disabled={BtnDisable}
            >
              LogIn
            </button>
            <h4>or</h4>
            <NavLink to="/signup" className="navlink">
              <button style={{ borderRadius: "10px" }} className="btnlg1">
                SignUp
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
