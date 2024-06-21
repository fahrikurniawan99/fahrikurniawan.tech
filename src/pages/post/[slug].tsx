import useDate from "@/hooks/useDate";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { PostData, getAllPostSlugs, getPostData } from "../../../lib/posts";
import * as React from "react";

export default function Page({ postData }: { postData: PostData }) {
  const date = useDate();

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box
        bgcolor={"grey.900"}
        px={3}
        mt={5}
        borderRadius={2}
        py={7}
        color={"white"}
      >
        <Typography
          letterSpacing={-0.5}
          variant="h5"
          fontWeight={600}
          lineHeight={1.2}
          textAlign={"center"}
          fontFamily={"inherit"}
        >
          {postData.title}
        </Typography>
      </Box>
      <Typography mt={1} color={"grey.700"} fontSize={13}>
        Published by Fahri kurniawan -{" "}
        {date.format(postData.publishDate, "relativeTime")}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return {
    props: {
      postData,
    },
  };
}
