import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import React from "react";

const Search = () => {
  return (
    <div className={"flex items-center max-w-[300px]"}>
      <SearchIcon className={"mr-2"} />
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        fullWidth
        size="small"
        InputProps={{
          endAdornment: null, // You can add icons or buttons here if needed
        }}
      />
    </div>
  );
};
export default Search;
