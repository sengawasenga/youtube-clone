import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, CardMedia, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((err) => console.error(err));

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => setChannelVideos(data?.items))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 4,
          p: 2,
          background: "linear-gradient(45deg, #222, #333)",
        }}
      >
        <CardMedia
          image={channelDetail?.snippet?.thumbnails.medium.url}
          alt={channelDetail?.snippet?.title}
          sx={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            cursor: "pointer",
            mr: 3,
          }}
        />
        <div>
          <Typography sx={{ fontWeight: 400, fontSize: "1.1rem" }}>
            {channelDetail?.snippet?.title}
          </Typography>
          <Typography
            sx={{ fontWeight: 300, fontSize: "0.8rem", color: "gray" }}
          >
            {channelDetail?.snippet?.customUrl}
          </Typography>
          <Typography
            sx={{ fontWeight: 300, fontSize: "0.8rem", color: "gray" }}
          >
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            subscribers
          </Typography>
        </div>
      </Box>
      <Container maxWidth="lg" p={2}>
        <Videos videosList={channelVideos} />
      </Container>
    </Box>
  );
};

export default ChannelDetail;
