"use client";
import React, { useState } from "react";
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { toast } from "react-toastify";
import PasswordStrength from "../components/PasswordStrength";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { Icon } from "react-icons-kit";

const Register = () => {
  const router = useRouter();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const register = () => {
    axios({
      method: "post",
      data: {
        username: registerUserName,
        password: registerPassword,
        confirmPassword: registerConfirmPassword,
        email: registerEmail,
      },
      withCredentials: true,
      url: "api/register",
    })
      .then(() => {
        setSuccess(true);
        toast.success(
          "Register Successfully !",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          },
          router.push("/Profile")
        );
      })
      .catch((error) => {
        toast.error(error.response.data.error,{
          position:'top-center',
          autoClose:5000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
          theme:'colored',
        })
      });
}

  return (
    <div className="test">
      <Box>
        
          <div className="roommie">
            <p>R</p>
            <p>O</p>
            <p>O</p>
            <p>M</p>
            <p>M</p>
            <p>I</p>

            <div className="title">
              <div className="e"></div>
              <div className="e"></div>
              <div className="e"></div>
            </div>
          </div>
      
      </Box>
      <div className="container">
        <div className="form signup">
          <h2>Register</h2>
          <div className="inputBox">
            <input
              type="text"
              name="email"
              required="required"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <i>
              <AiOutlineMail />
            </i>
            <span>Email</span>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="username"
              required="required"
              onChange={(e) => setRegisterUserName(e.target.value)}
            />
            <i>
              <BiUser />
            </i>
            <span>Username</span>
          </div>

          <div className="inputBox">
            <input
              type={type}
              name="password"
              required="required"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <i>
              <AiFillLock />
            </i>
            <span>Password</span>
          </div>
          <span className="eye-icon" onClick={handleToggle}>
            <Icon icon={icon} />
          </span>

          <div className="inputBox">
            <input
              type="password"
              name="confirmPassword"
              required="required"
              onChange={(e) => setRegisterConfirmPassword(e.target.value)}
            />
            <i>
              <AiFillLock />
            </i>
            <span>Confirm Password</span>
          </div>

          <Button className="btn" onClick={register}>
            Register
          </Button>

          <p>
            Already a member ? <a href="Login">Log in</a>
          </p>
        </div>
        <div className="form signin"></div>
        <PasswordStrength registerPassword={registerPassword} />
      </div>
    </div>
  );
};

export default Register;