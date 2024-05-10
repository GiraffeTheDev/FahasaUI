import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Box, useColorScheme } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="select-dark-light-mode"
        id="mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={"light"}>
          <Box className="flex items-center gap-x-2">
            <LightModeIcon></LightModeIcon>Light
          </Box>
        </MenuItem>
        <MenuItem value={"dark"}>
          <DarkModeIcon></DarkModeIcon>Dark
        </MenuItem>
        <MenuItem value={"system"}>
          <SettingsBrightnessIcon></SettingsBrightnessIcon>System
        </MenuItem>
      </Select>
    </FormControl>
  );
}
export default ModeSelect;
