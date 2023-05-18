import { SideBar, Videos } from './'
import { Box, Stack, Typography } from "@mui/material"
import { FetchApi } from '../utils/fetchFromApi'
import { useEffect, useState } from 'react'


export const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Novo')
  const [videos, setVideos] = useState([{}])

  useEffect(() => {
    try {
      (async () => {
        const data = await FetchApi(`search?part=snippet&q=${selectedCategory}`)
        setVideos(data?.items)
      })()

    } catch (error) {
      console.log(error)
    }

  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3D3D3D', px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#FFF' }}>Lorem ipsum dolor sit amet</Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#FFF' }}>
          {selectedCategory}
          <span style={{ color: '#F31503' }}> videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}
