/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import convertToBase64 from "../components/convert";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

const Profile = () => {

  const [file, setFile] = useState();
  
  const profile = () => {
    axios({
    method: "post",
    data: {
     image:file
    },
    withCredentials: true,
    url: "api/profile",
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
        router.push("/Login")
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

   
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="glass">
          <div className="flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Create your profile.
            </span>
          </div>

          <form className="py-1">
            <div className="profile flex justify-center p-4">
              <label htmlFor="profile">
                <img
                  src={file || "/profile.png"}
                  alt="avatar"
                  className="profile_img"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
                className="profileImg"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input className="textbox" type="text" placeholder="Username" />
            </div>
            <Button className="btn" onClick={profile}>
            Continue
          </Button>
          </form>
        </div>
      </div>
     
    </div>
  );
};



export default Profile;
