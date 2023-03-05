/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Box, FormControlLabel, FormGroup, TextField } from "@material-ui/core";
import React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import {FcBusinesswoman} from 'react-icons/fc';


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
        backgroundImage: 'url('+ <FcBusinesswoman/>+')'

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
      backgroundImage: `url("data:image/svg+xml, ${<FcBusinesswoman/>})`

    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Seeking = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="glass">
          <div className="flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500"></span>
            <div className="flex gap-5">
              <Switch checkedIcon={<FcBusinesswoman/>} />
              <TextField label="Smoking?" variant="outlined" />
              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label="MUI switch"
                />
              </FormGroup>

              <Box>

              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seeking;
