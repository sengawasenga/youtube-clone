import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => (
  <SkeletonTheme baseColor="#353535" highlightColor="#525252">
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/channels/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </SkeletonTheme>
);

export default App;
