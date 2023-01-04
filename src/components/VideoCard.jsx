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
    <Card sx={{ background: "#333" }}>
      <Link to={videoId && `/videos/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet.title}
          sx={{
            width: "240px",
            height: "130px",
            borderRadius: "12px",
          }}
          title={snippet.title}
        />
      </Link>
    </Card>
  );
};

export default VideoCard;
