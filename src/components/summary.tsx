import constants from "@/constants";
import { Typography } from "@mui/material";
import * as React from "react";

export default function Summary() {
  return (
    <>
      <Typography
        fontSize={20}
        mt={5}
        fontFamily={"inherit"}
        fontWeight={600}
        letterSpacing={-0.5}
        color={""}
      >
        {constants.profile.name}
      </Typography>
      <Typography
        variant="body1"
        mt={1}
        letterSpacing={-0.5}
        fontFamily={"inherit"}
      >
        {constants.profile.summary}
      </Typography>
    </>
  );
}
