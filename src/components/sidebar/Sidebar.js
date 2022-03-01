import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={props.sideBar ? "sidebar open" : "sidebar"}>
      <Link to="/">
        <li
          onClick={() => {
            props.handleSetSideBar(false);
          }}
        >
          <MdHome size={23} />
          <span>Home</span>
        </li>{" "}
      </Link>
      <Link to="/feed/subscriptions">
        <li
          onClick={() => {
            props.handleSetSideBar(false);
          }}
        >
          <MdSubscriptions size={23} />
          <span>Subscription</span>
        </li>
      </Link>
      <li
        onClick={() => {
          props.handleSetSideBar(false);
        }}
      >
        <MdThumbUp size={23} />
        <span>Like</span>
      </li>
      <li
        onClick={() => {
          props.handleSetSideBar(false);
        }}
      >
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li
        onClick={() => {
          props.handleSetSideBar(false);
        }}
      >
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li
        onClick={() => {
          props.handleSetSideBar(false);
        }}
      >
        <MdSentimentDissatisfied size={23} />
        <span>idk :/</span>
      </li>
      <hr />
      <li onClick={handleLogout}>
        <MdExitToApp size={23} />
        <span>Log out</span>
      </li>
      <hr />
    </nav>
  );
}

export default Sidebar;
