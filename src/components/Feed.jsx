import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchFromAPI(`search?q=${selectedCategory}`)
      .then((data) => console.log(data.items))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "calc(100vh - 100px)",
            padding: { sx: 0, md: 2 },
          },
          pl: 2,
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
          {selectedCategory} videos
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
