import React, { useEffect } from "react";
import { Button, TextField, Box } from "@material-ui/core";

const SearchForm = ({ ...props }) => {
  const { handleChangeInput, compareFunctions } = props;

  return (
    <Box width="160px" mb={3}>
      <Box component="div" mb={3}>
        <TextField
          color="primary"
          label="Enter the city name"
          type="text"
          onChange={handleChangeInput}
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={compareFunctions}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchForm;
