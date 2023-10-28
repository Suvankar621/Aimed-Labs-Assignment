import React from "react";
import styled from "styled-components";

const Login = () => {
  const Wrapper = styled.section`
    .login-body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    .logo img {
      width: 400px;
      height: 450px;
    }
    .login {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 50vmax;
      height: 45vmax;
      margin-top: -5vmax;
    }
    input,
    h4 {
      width: 70%;
      margin-left: 7vmax;
      height: 2.5vmax;
    }
    h1 {
      margin-left: 22vmax;
      font-size: 30px;
    }
    input {
      padding-left: 1vmax;
      border-radius: 9px;
      border: 1px solid gray;
      margin-top: -1.5vmax;
    }
    .buttons input {
      margin-top: 10px;
      height: 25px;
      width: 25px;
    }
    .buttons {
      display: flex;
    }
    .rm {
      margin-top: 10px;
      color: grey;
    }
    .cp {
      margin-top: 10px;
      margin-left: 19vmax;
      color: orange;
      cursor: pointer;
    }
    .tc {
      color: orange;
      text-decoration: underline;
      cursor: pointer;
    }
    button {
      width: 26vmax;
      height: 3vmax;
      margin-left: 12vmax;
      border-radius: 9px;
      background-color: rgba(21, 117, 167, 1);
      margin-top: 1vmax;
      color: white;
      border: none;
      transition: all 0.2s ease-in-out;
    }
    button:hover{
        transform: scale(1.1);
        background-color: rgb(0, 102, 226);
        cursor: pointer;
    }
    .ac {
      margin-top: 10px;
      margin-left: 16vmax;
    }
    .rh {
      color: orange;
      font-weight: bold;
      cursor: pointer;
    }
    @media only screen and (max-width: 1030px) {
      .login-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .logo img {
        width: 140px;
        height: 150px;
        margin-top: -30vmax;
      }
      h1 {
        margin-top: 26vmax;
        font-size: 25px;
      }
      h4 {
        margin-left: 26px;
      }
      input {
        margin-left: 20px;
        width: 82%;
        padding: 2vmax;
        border-radius: 9px;
        border: 1px solid gray;
        margin-top: -1.5vmax;
      }

      .rm {
        margin-top: 2.3vmax;
        font-size: 12px;
        width: 145px;
      }

      .cp {
        font-size: 12px;
        width: 117px;
        margin-left: 7vmax;
      }

      button {
        width: 42vmax;
        padding: 2vmax;
        margin-left: 29px;
        margin-top: 4vmax;
        padding-bottom: 4vmax;
      }

      .ac {
        font-size: 12px;
        width: 300px;
        margin-left: 10vmax;
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <form action="">
          <div className="login-body">
            <div className="logo">
              <img src="Images/Logo.png" alt="" />
            </div>

            <div className="login">
              <h1>Login</h1>

              <h4>Username</h4>
              <input
                className="email"
                type="email"
                placeholder="Enter your Username"
              />
              <h4>password</h4>
              <input
                className="password"
                type="password"
                placeholder="Enter your Password"
              />
              <div className="buttons">
                <input type="radio" className="rememberme" aria-checked />
                <span className="rm">Remember Me</span>
                <span className="cp">Change Password</span>
              </div>

              <div className="buttons">
                <input type="radio" className="rememberme" aria-checked />
                <span className="rm">
                  Agree to <span className="tc">Term & Condition</span>
                </span>
              </div>

              <button>Login</button>
              <p className="ac">
                Don't have an account? <span className="rh">Register Here</span>
              </p>
            </div>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default Login;
