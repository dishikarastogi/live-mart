import React from "react";
import Checkbox, {roleData} from "./Checkbox";
import {email,password} from "./SocialMediaLogin";
import { useHistory } from "react-router-dom";
import axios from "../utils/axios";

let userSocialId = {
  id: null,
};
function TypeofUser() {
    let history= useHistory();
      const generateOtp = (e) => {
        axios
          .get(
            "/login/sendOtp",
            {
              params: {
                email_id: email,
              },
            }
          )
          .then((res) => {
            console.log("RESPONSE ==== : ", res);
            history.push("/otpmedia");
          })
          .catch((err) => {
            console.log("ERROR: ====", err);
          });
      };
    
      const login = (e) => {
        console.log(email, password, roleData);
        axios
          .get(
            "/login",
            {
              params: {
                email_id: email,
                password: password,
                role: roleData,
              },
            }
          )
          .then((res) => {
            console.log('login successful', res);
            userSocialId.id = res.data.data;
            return generateOtp();
          })
          .catch((err) => {
            console.error("ERROR: ====", err);
          });
      };
  return (
    <div>
      <img
        style={{ height: 200, width: 200 }}
        src='https://i.imgur.com/WQcFuwz.png'
        alt='logo'
        className='logo'
      />
      <h1 className='title-heading'>
        <header>LIVE MART</header>
      </h1>
      <h3>Choose your role for login</h3>
      <Checkbox />
      <div className='row mb-3 px-3'>
        <div style={{ display: "block", marginTop: 20 }}>
       
          <button style={{marginLeft: 860}}
            type='submit'
            onClick={login}
            className='btn btn-blue text-center'>
            Login 
          </button>

        </div>
      </div>
    </div>
  );
}

export default TypeofUser;
export {userSocialId};
