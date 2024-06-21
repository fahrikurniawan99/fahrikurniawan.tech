import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function PostReaction() {
  return (
    <>
      <Typography
        mt={5}
        color={"grey.700"}
        fontSize={14}
        fontFamily={"inherit"}
        fontWeight={500}
        textAlign={"center"}
      >
        How about after reading this article ?
      </Typography>
      <Stack direction="row" spacing={2} mt={1} justifyContent="center">
        <IconButton size="small">
          <Image
            width={48}
            height={48}
            alt="image not found..."
            src={"/smile.png"}
          />
        </IconButton>
        <IconButton size="small">
          <Image
            width={48}
            height={48}
            alt="image not found..."
            src={"/funny.png"}
          />
        </IconButton>
        <IconButton size="small">
          <Image
            width={48}
            height={48}
            alt="image not found..."
            src={"/disappointed.png"}
          />
        </IconButton>
      </Stack>
    </>
  );
}
