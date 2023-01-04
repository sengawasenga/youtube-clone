import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videosList }) => (
  <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
    {videosList.map((item, index) => (
      <Box key={index}>
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channel={item} />}
      </Box>
    ))}
  </Stack>
);

export default Videos;
