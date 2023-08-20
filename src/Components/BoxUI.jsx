import React from "react";
import { Box, Typography } from "@mui/material";
const BoxUI = () => {
  return (
    <>
      <hr />
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "primary.min",
            opacity: [0.9],
          },
        }}
      >
        <Typography
          color={"white"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          paddingTop={'80px'}
          variant="h5"
        >
          Box UI
        </Typography>
      </Box>
    </>
  );
};

export default BoxUI;
