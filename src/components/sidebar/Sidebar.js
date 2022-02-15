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
function Sidebar(props) {
  const dispatch=useDispatch()
  const handleLogout=()=>{
    dispatch(logout())
  }
  return (
    <nav
      className={props.sideBar ? "sidebar open" : "sidebar"}
      onClick={() => {props.handleSetSideBar(false)}}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Like</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
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
