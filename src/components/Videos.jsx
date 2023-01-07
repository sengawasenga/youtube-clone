import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, CardSkeleton } from "./";
import { useState, useEffect } from "react";

const Videos = ({ videosList, direction }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [videosList]);

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {isLoading && <CardSkeleton cards={8} />}
      {videosList.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
