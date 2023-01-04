import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "calc(100vh - 100px)",
            padding: { sx: 0, md: 2 },
          },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#dfdfdf" }}
        >
          Copyright 2023 | fleshOwl
        </Typography>
      </Box>

      <Box
        pl={4}
        sx={{ overflowY: "auto", height: "calc(100vh - 78px)", flex: 2 }}
      >
        <Typography variant="h4" mb={4} sx={{ fontWeight: 300 }}>
          New videos
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
