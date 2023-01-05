import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channel }) => (
  <Box sx={{ boxShadow: "none", borderRadius: "12px", width: "240px" }}>
    <Link to={`/channels/${channel?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#dfdfdf",
        }}
      >
        <CardMedia
          image={channel?.snippet?.thumbnails?.high?.url}
          alt={channel?.snippet?.title}
          sx={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            mb: "8px",
          }}
        />
        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: "400",
            color: "#dfdfdf",
            lineHeight: "1.2rem",
          }}
        >
          {channel?.snippet?.title}
          <CheckCircle sx={{ color: "#dfdfdf", fontSize: "14px", ml: "5px" }} />
        </Typography>
        {channel?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
