import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import { PostData, getSortedPostsData } from "../../lib/posts";
import useDate from "@/hooks/useDate";
import Link from "next/link";

export default function BlogPage({
  allPostsData,
}: {
  allPostsData: PostData[];
}) {
  const date = useDate();
  const data = allPostsData;

  return (
    <Box mt={2}>
      <Typography fontFamily={"inherit"} fontSize={16} mb={0.5}>
        All Posts
      </Typography>
      {data.map((post: PostData) => (
        <Stack
          key={post.slug}
          fontSize={14}
          alignItems={"center"}
          direction={"row"}
          gap={2}
        >
          <Typography color={"GrayText"} fontSize={14} fontFamily={"inherit"}>
            {date.format(post.publishDate)}
          </Typography>
          <Link
            href={`/post/${post.slug}`}
            // underline="none"
            style={{ color: "inherit", textDecoration: "underline" }}
            // sx={{
            //     textDecoration: "underline",
            // }}
            // component={NextLink}
          >
            {post.title}
          </Link>
        </Stack>
      ))}
    </Box>
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
