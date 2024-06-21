import constants from "@/constants";
import { Stack } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export default function Navigation() {
  return (
    <Stack direction={"row"} spacing={1} py={2} fontSize={14}>
      {constants.links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          style={{ color: "ButtonText", textDecoration: "none" }}
        >
          {link.title}
        </Link>
      ))}
    </Stack>
  );
}
