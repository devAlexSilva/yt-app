import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Box } from '@mui/material'
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchField
} from './components'


export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/searchTerm' element={<SearchField />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
