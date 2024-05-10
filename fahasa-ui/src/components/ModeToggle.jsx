import { Button, useColorScheme } from "@mui/material";
import React from "react";

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
};

export default ModeToggle;
