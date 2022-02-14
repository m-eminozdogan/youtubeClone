import { auth, provider } from "../../firebase";
import { signInWithPopup,GoogleAuthProvider, signOut } from "firebase/auth";

export const login = () => async (dispatch) => {
  try {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // ...
      })
  } catch (error) {}
};
