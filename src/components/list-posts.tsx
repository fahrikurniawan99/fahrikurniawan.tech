import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import { PostData } from "../../lib/posts";
import Link from "next/link";
import useDate from "@/hooks/useDate";

export default function ListPosts({ data }: { data: PostData[] }) {
  const date = useDate();

  return (
    <Box mt={2}>
      <Typography fontFamily={"inherit"} fontSize={16} mb={0.5}>
        Latest post
      </Typography>
      {data.map((post: PostData) => (
        <Stack key={post.slug} fontSize={14} alignItems={"center"} direction={"row"} gap={2}>
          <Typography color={"GrayText"} fontSize={14} fontFamily={"inherit"}>
            {date.format(post.publishDate)}
          </Typography>
          <Link
            href={`/post/${post.slug}`}
            style={{
              textDecoration: "underline",
              color: "inherit",
            }}
          >
            {post.title}
          </Link>
        </Stack>
      ))}
    </Box>
  );
}
