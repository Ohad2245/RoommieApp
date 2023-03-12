/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import convertToBase64 from "../components/convert";
import { toast } from "react-toastify";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CountryData from "../components/CountryData.json";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { FormControlLabel } from "@mui/material";
import { useRouter } from "next/router";
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import axios from "axios";
import { withSessionSsr } from "lib/config/withSession";
import { profileStage } from "./api/profileStage";

/*
export const getServerSideProps = withSessionSsr(
  async ({req, res}) => {
      const user = req.session.user;
      console.log("Profile Page, User: ", user);

      if(!user) {
        console.log("Profile Page - no user connected");
        return {
            notFound: true,
        }
      }

      const status = profileStage(user);
      console.log(status);
      if(status === 1) {
        console.log("Profile Page - user has profile");
        return(
          <Redirect to="/Home" />
        );
      }

      return {
          props: { user }
      }
  }
);
*/
export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;
  console.log("Profile Page, User: ", user);

  if (!user) {
    console.log("Profile Page - no user connected");
    return {
      notFound: true,
    };
  }

  const status = profileStage(user);
  console.log("status: " + status);
  return {
    props: { user },
  };
});

const Profile = ({ user }) => {
  const router = useRouter();

  const [countries, setCountries] = useState(CountryData);
  const [selectedCountry, setSelectedCountry] = useState("Choose");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");

  const [file, setFile] = useState();
  const [age, setAge] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [value, setValue] = useState(dayjs(""));

  const handleChangeDate = (newValue) => {
    setValue(newValue);
    setAge(newValue);
  };

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const profile = () => {
    axios({
      method: "post",
      data: {
        country: selectedCountry,
        birthday: age,
        profileImage: file,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        bio: bio,
      },
      withCredentials: true,
      url: "api/profile",
    })
      .then(() => {
        setSuccess(true);
        toast.success(
          "Profile created!",
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
          router.push("/ChooseOffer")
        );
      })
      .catch((error) => {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="glass">
          <div className="flex flex-col items-center">
            <h4 className="text-5xl font-bold">
              
              {user.username + ' '}
              Hello Again!
            </h4>
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
              <TextField
                style={{ width: "50%" }}
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              ></TextField>
              <TextField
                style={{ width: "50%" }}
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              ></TextField>
            </div>
            <br />
            <div style={{ display: "flex", gap: "5px" }}>
              <FormControl style={{ width: "50%" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  onChange={(e) => setGender(e.target.value)}
                >
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}
                >
                  <MenuItem value="male">
                    <FcBusinessman />
                  </MenuItem>
                  <MenuItem value="female">
                    <FcBusinesswoman />
                  </MenuItem>
                </Select>
              </FormControl>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack style={{ width: "50%" }}>
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
            <br />
            <TextField
              fullWidth
              label="Bio"
              onChange={(e) => setBio(e.target.value)}
            />
          </form>
          <Button
            onClick={profile}
            fullWidth
            className="continue "
            variant="outlined"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
