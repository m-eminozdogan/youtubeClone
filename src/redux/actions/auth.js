import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      //console.log(user);
      // ...

      const profile = {
        name: user.displayName,
        photoUrl: user.photoURL,
      };

      sessionStorage.setItem("ytc-accessToken", token);
      sessionStorage.setItem("ytc-user", JSON.stringify(profile));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
      dispatch({
        type: LOAD_PROFILE,
        payload: profile,
      });
    });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  await signOut(auth);
  dispatch({
    type: LOG_OUT,
  });
  sessionStorage.removeItem("ytc-accessToken");
  sessionStorage.removeItem("ytc-user");
};
