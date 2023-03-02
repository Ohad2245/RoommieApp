/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import convertToBase64 from "../components/convert";
import axios from "axios";
import { toast } from "react-toastify";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CountryData from "../components/CountryData.json";

const Profile = () => {
  const [countries, setCountries] = useState(CountryData);
  const [selectedCountry, setSelectedCountry] = useState("Choose");

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [file, setFile] = useState();
  const [age, setAge] = useState("");

  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

  // const profile = () => {
  //   axios({
  //     method: "post",
  //     data: {
  //       image: file,
  //     },
  //     withCredentials: true,
  //     url: "api/profile",
  //   })
  //     .then(() => {
  //       setSuccess(true);
  //       toast.success(
  //         "Register Successfully !",
  //         {
  //           position: "top-center",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         },
  //         router.push("/Login")
  //       );
  //     })
  //     .catch((error) => {
  //       toast.error(error.response.data.error, {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     });
  // };

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
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
            <div style={{ display: "flex", gap: "5px" }}>
              <FormControl style={{ width: "55%" }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Gender"
                  onChange={handleChange}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack style={{ width: "55%" }}>
                  <DesktopDatePicker
                    label="Birthday"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChangeDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            <br />
            
            <div>
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select label="Country" onChange={handleChangeCountry}>
                  {countries.map((item) => {
                    return (
                      <MenuItem value={item.country}>{item.country}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
