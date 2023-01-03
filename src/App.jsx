import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components'

const App = () => (
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
)

export default App
