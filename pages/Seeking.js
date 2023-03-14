/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Box, FormControlLabel, FormGroup, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="2.5 2 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z"/></svg>')`,
      },

      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="2.5 1 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="m2 6 6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35zm2.5 7.23V13h-2.93z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Seeking = () => {
  const router = useRouter();

  const profileStage = () => {
    const status = profileStage(user);
    console.log("status", status);
    return status;
  };

  const Seeking = () => {
    const profileStage = () => {
      const status = profileStage(user);
      console.log("status", status);
      return status;
    };
  };

  const [smoker, setSmoker] = useState();
  const [pet, setPet] = useState();
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="glass">
          <div>
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Test
            </span>
            <div>
              <div>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} />}
                  onChange={() => setSmoker(!smoker)}
                />
                {smoker ? (
                  ""
                ) : (
                  <div className="flex flex-start gap-5">
                    <p>
                      Does it bother you if someone <br /> smokes in your
                      apartment?
                    </p>
                    <FormControlLabel control={<IOSSwitch defaultChecked />} />
                  </div>
                )}
              </div>
            </div>
            <br />
            <div>
              <div>
                <h1>Pet</h1>
                <FormGroup>
                  <FormControlLabel
                    control={<MaterialUISwitch sx={{ m: 1 }} />}
                    onChange={() => setPet(!pet)}
                  />
                </FormGroup>
                {pet ? (
                  ""
                ) : (
                  <div className="flex flex-start gap-5">
                    <p>
                      Does it bother you if someone <br /> has a pet in your
                      apartment?
                    </p>
                    <FormControlLabel control={<IOSSwitch defaultChecked />} />
                  </div>
                )}
              </div>
              <br />
              <div style={{ display: "flex", gap: "5px" }}>
                <FormControl style={{ width: "50%" }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    Apartment with just
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Apartment with just"
                    onChange={handleChangeGender}
                  >
                    <MenuItem value="male">
                      <FcBusinessman />
                    </MenuItem>
                    <MenuItem value="female">
                      <FcBusinesswoman />
                    </MenuItem>
                    <MenuItem value="dont care">
                      <small>Don't care</small>
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{ width: "50%" }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Status"
                    onChange={handleChangeGender}
                  >
                    <MenuItem value="Solider">
                      <small>Solider</small>
                    </MenuItem>
                    <MenuItem value="Student">
                      <small>Student</small>
                    </MenuItem>
                    <MenuItem value="Lone Solder">
                      <small>Lone Solder</small>
                    </MenuItem>
                    <MenuItem value="Just Graduated">
                      <small>Just Graduated</small>
                    </MenuItem>
                    <MenuItem value="Employed ">
                      <small>Employed </small>
                    </MenuItem>
                    <MenuItem value="Oleh Hadash ">
                      <small>Oleh Hadash </small>
                    </MenuItem>
                    <MenuItem value="Other ">
                      <small>Other </small>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seeking;
