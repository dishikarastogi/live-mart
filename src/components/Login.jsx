/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SocialMediaLogin from "./SocialMediaLogin";
import axios from "../utils/axios";
import Checkbox from "./Checkbox";

let mail,userid;
function Login({ role, setRole, setUserId }) {
  let history = useHistory();
 
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  mail=state.email;
  const generateOtp = (e) => {
    axios
      .get(
        "/login/sendOtp",
        {
          params: {
            email_id: state.email,
          },
        }
      )
      .then((res) => {
        console.log("RESPONSE ==== : ", res);
        history.push("/otp");
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
  };

  const login = (e) => {
    console.log(state.email, state.password, role);
    axios
      .get(
        "/login",
        {
          params: {
            email_id: state.email,
            password: state.password,
            role,
          },
        }
      )
      .then((res) => {
        console.log('login successful', res);
        setUserId(res.data.data);
        return generateOtp();
      })
      .catch((err) => {
        console.error("ERROR: ====", err);
      });
  };

  return (
    <div className='container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto login'>
      <div className='card card0 border-0'>
        <div className='row d-flex'>
          <div className='col-lg-6'>
            <div className='card1 pb-5'>
              <div className='row'>
                {" "}
                <img
                  style={{ height: 200, width: 200 }}
                  src='https://i.imgur.com/WQcFuwz.png'
                  alt='logo'
                  className='logo'
                />{" "}
              </div>
              <div className='row px-3 justify-content-center mt-4 mb-5 border-line'>
                {" "}
                <img src='https://tinyurl.com/grocerylive' alt='grocery' />
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card2 card border-0 px-4 py-5'>
              <div className='row mb-4 px-3'>
                <h6 className='mb-0 mr-4 mt-2'>Log in with</h6>

                <SocialMediaLogin />
              </div>
              <div className='row px-3 mb-4'>
                <div className='line'></div>{" "}
                <small className='or text-center'>Or</small>
                <div className='line'></div>
              </div>
              <div className='row px-3'>
                {" "}
                <label className='mb-1'>
                  <h6 className='mb-0 text-sm'>Username</h6>
                </label>{" "}
                <input
                  className='mb-4'
                  id='email'
                  value={state.email}
                  type='email'
                  placeholder='Enter email'
                  onChange={handleChange}
                  required
                />{" "}
              </div>
              <div className='row px-3'>
                <label className='mb-1'>
                  <h6 className='mb-0 text-sm'>Password</h6>
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='Enter password'
                  value={state.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='row px-3'>
                <button
                  style={{ marginTop: 20 }}
                  className='btn btn-secondary dropdown-toggle mr-4'
                  type='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Type of User
                </button>
                <div
                  className='dropdown-menu'
                  onClick={(e) => e.stopPropagation()}>
                  <Checkbox setRole={setRole} />
                </div>
              </div>
              <div className='row px-3'></div>

              <div className='row mb-4 px-3'>
                <small className='font-weight-bold'>
                  Don't have an account? <a href='/signup'>Register</a>
                </small>
              </div>
              <div>
                <button
                  style={{ marginTop: 40 }}
                  type='submit'
                  className='btn btn-blue text-center'
                  onClick={login}>
                  Generate OTP
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-blue py-4'>
          <div className='row px-3'>
            <small className='ml-4 ml-sm-5 mb-2'>
              Copyright &copy; 2021. All rights reserved.
            </small>
            <div className='social-contact ml-4 ml-sm-auto'>
              <span className='fa fa-facebook mr-4 text-sm'></span>{" "}
              <span className='fa fa-google-plus mr-4 text-sm'></span>{" "}
              <span className='fa fa-linkedin mr-4 text-sm'></span>{" "}
              <span className='fa fa-twitter mr-4 mr-sm-5 text-sm'></span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
export {mail,userid}
