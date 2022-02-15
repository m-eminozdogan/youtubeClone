import "./_loginScreen.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const LoginScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const handleLogin = () => {
    dispatch(login());
  };
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken]);

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
