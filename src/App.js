import "./App.css";
import "./_app.scss";
import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { useState } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { Routes, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WatchScreen from "./screens/watchScreen/WatchScreen";
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
  const navigate = useNavigate();
  const { accessToken, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/login");
    }
  }, [accessToken, loading]);

  return (
    <Routes>
      <Route exact path="/login" element={<LoginScreen />} />
      <Route  path="/watch/:id" element={Layout(WatchScreen())} />

     
      <Route
        exact
        path="/search"
        element={Layout(
          <>
            <h1>arama sonuçları</h1>
          </>
        )}
      />
      <Route exact path="/" element={Layout(HomeScreen())} />
    </Routes>
  );
}

export default App;
