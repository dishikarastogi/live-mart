import React from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import {email,password} from "./SocialMedia";
import axios from "axios";

function Role({ setRole, role }) {
  const sendDetailstoServer = () => {
    const data = {
      email_id: email,
      password: password,
      role,
      user_name: email,
    };

    axios
      .post(
        "http://ec2-35-154-218-25.ap-south-1.compute.amazonaws.com:8080/login/createNewUser",
        data,
      )
      .then((res) => {
        console.log("RESPONSE ==== : ", res);
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
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
      <h3>Choose your role for signIn</h3>
      <Checkbox setRole={setRole} />
      <div className='row mb-3 px-3'>
        <div style={{ display: "block", marginTop: 20 }}>
        <Link to='/login'>
          <button style={{marginLeft: 860}}
            type='submit'
            onClick={sendDetailstoServer}
            className='btn btn-blue text-center'>
            Register
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Role;
