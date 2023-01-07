import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        background: "#333",
        width: { xs: "100%", md: "240px" },
        boxShadow: "none",
        borderRadius: "12px",
      }}
    >
      <Link to={videoId && `/videos/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet.title}
          sx={{
            width: { xs: "100%", md: "240px" },
            height: "130px",
            borderRadius: "12px",
          }}
          title={snippet.title}
        />
      </Link>
      <CardContent sx={{ height: "100px", pl: 0 }}>
        <Link to={videoId && `/videos/${videoId}`}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: "400",
              color: "#dfdfdf",
              marginBottom: 1,
              lineHeight: "1.2rem",
            }}
            title={snippet.title}
          >
            {snippet.title.length > 45
              ? snippet.title.slice(0, 45) + " ..."
              : snippet.title}
          </Typography>
        </Link>
        <Link to={snippet?.channelId && `/channels/${snippet?.channelId}`}>
          <Typography
            sx={{ fontWeight: "300", color: "gray", fontSize: "0.8rem" }}
            title={snippet.channelTitle}
          >
            {snippet?.channelTitle.slice(0, 40)}
            <CheckCircle sx={{ color: "gray", fontSize: "13px", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
