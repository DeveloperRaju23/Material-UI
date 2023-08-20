import React from "react";
import { Typography } from "@mui/material";
const TypographyUI = () => {
  return (
    <div>
      <hr />
      <Typography
        variant="h1"
        align="center"
        component="div"
        sx={{
          backgroundColor: "purple",
          color:"white",
          fontSize:"20px",
          padding:"20px 0"
          
        }}
      >
        This is Heading H1
      </Typography>
      <Typography variant="h2" color={"primary"} component="div">
        This is Heading H2
      </Typography>
      <Typography
        align="center"
        color={"secondary"}
        variant="h3"
        component="div"
      >
        This is Heading H3
      </Typography>
      <Typography align="end" variant="h4" component="div">
        This is Heading H4
      </Typography>
      <Typography variant="h5" component="div">
        This is Heading H5
      </Typography>
      <Typography variant="h6" component="div">
        This is Heading H6
      </Typography>
    </div>
  );
};

export default TypographyUI;
