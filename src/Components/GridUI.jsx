import React from "react";
import { Stack, Box } from "@mui/material";
const GridUI = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      md:alignItems={"center"}
      justifyContent={"space-around"}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ background: "tomato" }}
    >
      <Box sx={{ background: "red" }}>Box 1</Box>
      <Box sx={{ background: "green" }}>Box 2</Box>
      <Box sx={{ background: "blue" }}>Box 3</Box>
      <Box sx={{ background: "purple" }}>Box 4</Box>
    </Stack>
  );
};

export default GridUI;
