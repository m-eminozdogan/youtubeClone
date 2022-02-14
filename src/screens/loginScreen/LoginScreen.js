import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__container">
        <img alt="#" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" />
        <button onClick={handleLogin}>Login with Google</button>
        <p>I'm using Youtube Data Api in this project</p>
      </div>
    </div>
  );
};

export default LoginScreen;
