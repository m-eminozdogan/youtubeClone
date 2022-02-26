import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
function Header(props) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return null;
  }
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => props.handleSetSideBar()}
      />
      <img
        alt="#"
        className="header__logo"
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />

        <img alt="avatar" src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
