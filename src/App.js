import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import "./index.css";
import Login from "./Component/Login/Login";
import SignUp from "./Component/Login/SignUp";
import { auth } from "./Firebase/Firebase";
import sndUserName from "./Component/Context";
import { sndUserPhoto } from "./Component/Context";

function App() {
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
  const [login, setLogin] = useState("Login");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("usrName is" , user);
      if(user.displayName && user.photoURL) {
        setUserName(user.displayName)
        setUserPhoto(user.photoURL)          
        
        setLogin("LogOut")
      } else {
        setUserName(user.displayName)
    }
    });
  }, []);
  
  console.log("user photo is ==", userPhoto);
  return (
    <>
    <sndUserName.Provider value={userName}>
    <sndUserPhoto.Provider value={userPhoto}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      </sndUserPhoto.Provider>
      </sndUserName.Provider>
    </>
  );
}

export default App;
