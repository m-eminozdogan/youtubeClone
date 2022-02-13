import "./App.css";
import "./_app.scss";
import { Container } from "react-bootstrap";
import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { Fragment, useState } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Layout = (children) => {
  const [sideBar, setSideBar] = useState(false);
  const handleSetSideBar = () => setSideBar((value) => !value);
  return (
    <>
      <Header handleSetSideBar={handleSetSideBar} />
      <div className="app__container">
        <Sidebar sideBar={sideBar} handleSetSideBar={handleSetSideBar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Layout(HomeScreen())} />

        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
