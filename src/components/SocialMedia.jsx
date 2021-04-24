import React from "react";
import {
  /*FacebookLoginButton, InstagramLoginButton,*/ GoogleLoginButton,
} from "react-social-login-buttons";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./utils/refreshToken";
import { useHistory } from "react-router-dom";


let email, password;
const clientId =
  "980989432143-jjkrc60gulgmtlidr4051ksbp9ki5sft.apps.googleusercontent.com";

function SocialMedia() {
  let history = useHistory();
  
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    refreshTokenSetup(res);
    email=res.profileObj.email;
    password=res.profileObj.googleId;
    history.push('/role');
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });
  return (
    <div className='row mb-4 px-3'>
      {/* <FacebookLoginButton onClick={() => alert("Hello")}>
                     </FacebookLoginButton>

                     <InstagramLoginButton onClick={() => alert("Hello")}>
                     </InstagramLoginButton> */}

      <GoogleLoginButton onClick={signIn}>
        <span>Google</span>
      </GoogleLoginButton>
    </div>
  );
}

export default SocialMedia
export {email, password}