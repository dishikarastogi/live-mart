import React, { useState } from "react";
import axios from "../utils/axios"
import { Link, useHistory } from "react-router-dom";
import { email } from "./SocialMediaLogin";

function OtpforMedia() {
  let history = useHistory();
  const [num, setNum] = useState("");
  const handleChange = (e) => {
    setNum(e.target.value);
  };
  const verifyOtp = (e) => {
    console.log(num);
    console.log(email);
    axios
      .get("/login/verifyOtp", {
        params: {
          email_id: email,
          otp: num,
        },
      })
      .then((res) => {
        console.log("RESPONSE ==== : ", res);
        if (res.data.success === true) {
          history.push("/options-social");
        } else {
          alert("OTP not verified, try again");
        }
      })
      .catch((err) => {
        console.error("ERROR: ====", err);
      });
  };
  return (
    <div className='d-flex justify-content-center align-items-center containerOTP container'>
      <div className='cardOTP card py-5 px-3'>
        <h3 className='m-0'>Mobile phone verification</h3>
        <span className='mobile-text'>
          Enter the code we just send on your email
          <b className='text-danger'></b>
        </span>
        <div className='d-flex flex-row mt-5'>
          <input
            style={{ textAlign: "center" }}
            type='text'
            value={num}
            className='form-control'
            onChange={handleChange}
          />
        </div>
        <div>
          <Link to='/options'>
            <button
              style={{ marginTop: 30 }}
              type='submit'
              className='btn btn-blue text-center'
              onClick={verifyOtp}>
              Login
            </button>
          </Link>
        </div>
        <div className='text-center mt-5'>
          <span className='d-block mobile-text'>Didn't receive the code?</span>
          <span className='font-weight-bold text-danger cursor'>Resend</span>
        </div>
      </div>
    </div>
  );
}
export default OtpforMedia;
