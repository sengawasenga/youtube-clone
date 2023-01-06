import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideo(data.items[0]))
      .catch((err) => console.error(err));

    fetchFromAPI(
      `search?part=snippet,statistics&relatedToVideoId=${id}&type=video`
    )
      .then((data) => setRelatedVideos(data.items))
      .catch((err) => console.error(err));
  }, [id]);

  if (!video?.snippet) {
    return "Loading...";
  }

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = video;

  return (
    <Box minHeight="calc(100vh - 90px)" p={2} pt={0}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%" }}>
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              playing={true}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                marginBottom: "5px",
              }}
            />
            <Typography sx={{ fontWeight: 400, fontSize: "1.3rem" }}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link to={`/channels/${channelId}`}>
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#dfdfdf",
                  }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "0.9rem", ml: "5px", mb: "1.5px" }}
                  />
                </Typography>
              </Link>

              <Stack direction="row">
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontSize: "0.8rem",
                    mr: 1,
                  }}
                  className="stat-box"
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontSize: "0.8rem",
                  }}
                  className="stat-box"
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{ md: 0, xs: 5 }}>
          <Videos videosList={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
