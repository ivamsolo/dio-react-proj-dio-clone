import React, { useEffect, useState, useContext } from "react";
import { LoginContextProvider, LoginContext } from "./contexts/LoginContext";
import {Routes, Route, redirect } from 'react-router-dom'
import { GlobalStyle } from "./styles/globalStyle";
import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import { SignUp } from "./pages/signup";


export default function App(props) {
  return (
    <>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="feed" element={<Feed/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
        </Routes>
    </>
  );
}