import { Box, Button, Input, Stack, Typography } from "@mui/material";
import React from "react";

export default function Comments() {
  return (
    <>
      <Typography
        mt={4}
        letterSpacing={-0.3}
        fontSize={16}
        fontFamily={"inherit"}
        color={"grey.900"}
      >
        Comments (100)
      </Typography>
      <Box>
        <Box
          component={"textarea"}
          sx={{
            width: "100%",
            ":focus": {
              outline: "none",
              borderColor: "primary.main",
            },
          }}
          fontFamily={"inherit"}
          rows={4}
          mt={1.5}
          p={1.5}
          border={1}
          borderRadius={2}
          borderColor={"grey.200"}
        />
      </Box>
      <Stack direction={"row"} justifyContent={"flex-end"}>
        <Button
          variant={"contained"}
          sx={{
            fontFamily: "inherit",
            mt: 1,
            fontSize: 14,
            fontWeight: 400,
            boxShadow: "none",
            textTransform: "none",
            ":hover": { boxShadow: "none" },
          }}
        >
          Submit
        </Button>
      </Stack>
      {Array.from({ length: 5 }).map((_, i) => (
        <Box
          mt={1.5}
          p={1.5}
          border={1}
          borderRadius={3}
          borderColor={"grey.200"}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              letterSpacing={-0.3}
              fontSize={14}
              fontWeight={500}
              fontFamily={"inherit"}
              color={"grey.900"}
            >
              Fahri Kurniawan
            </Typography>
            <Typography
              letterSpacing={-0.3}
              fontSize={14}
              fontWeight={500}
              fontFamily={"inherit"}
              color={"grey.500"}
            >
              1 hour ago
            </Typography>
          </Stack>
          <Typography
            fontSize={14}
            mt={0.5}
            fontFamily={"inherit"}
            color={"grey.900"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a
            eligendi molestias dolor omnis maiores animi architecto vitae
            mollitia iste tempora quidem quis ipsam quisquam, soluta quas
            voluptatibus excepturi culpa!
          </Typography>
        </Box>
      ))}
    </>
  );
}
