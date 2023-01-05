import { Box, Container, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [searchTerm]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ overflowY: "auto", height: "calc(100vh - 78px)" }}>
        <Typography variant="h4" mb={4} sx={{ fontWeight: 300 }}>
          Search results for: {searchTerm}
        </Typography>
        <Videos videosList={videos} />
      </Box>
    </Container>
  );
};

export default SearchFeed;
