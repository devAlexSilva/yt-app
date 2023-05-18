import { Videos } from './'
import { Box, Typography } from '@mui/material'
import { FetchApi } from '../utils/fetchFromApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const SearchFeed = () => {
  const [videos, setVideos] = useState([{}])
  const { searchTerm } = useParams()

  useEffect(() => {
    try {
      (async () => {
        const data = await FetchApi(`search?part=snippet&q=${searchTerm}`)
        setVideos(data?.items)
      })()

    } catch (error) {
      console.log(error)
    }

  }, [searchTerm])

  return (
    <Box p={2} minHeight='95vh'>
      <Typography variant='h4' fontWeight={900} color='white' mb={3} ml={{ sm: '100px' }}>
        Resultados para: <span style={{ color: '#FC1503' }}>{searchTerm}</span>
      </Typography>
      <Box display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}
