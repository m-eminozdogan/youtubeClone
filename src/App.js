import "./App.css";
import "./_app.scss";
import { Container } from "react-bootstrap";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { useState } from "react";
function App() {
  const [sideBar, setSideBar] = useState(false);
  const handleSetSideBar = () => setSideBar((value) => !value);
  return (
    <>
      <Header handleSetSideBar={handleSetSideBar} />
      <div className="app__container border border-info">
        <Sidebar sideBar={sideBar} handleSetSideBar={handleSetSideBar} />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
