import "./App.css";
import "./_app.scss";
import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { useState } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
        <Route path="/" element={Layout(HomeScreen())} />
        <Route
          path="/search"
          element={Layout(
            <>
              <h1>arama sonuçları</h1>
            </>
          )}
        />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
  );
}

export default App;
