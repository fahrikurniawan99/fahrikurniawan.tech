import { Link } from "@mui/material";
import * as React from "react";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavigationLink(props: NavigationLinkProps) {
  return (
    <Link href={props.href} sx={{}} color={"inherit"} underline="none">
      {props.children}
    </Link>
  );
}
