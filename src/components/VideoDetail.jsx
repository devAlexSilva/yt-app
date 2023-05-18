import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FetchApi } from "../utils/fetchFromApi"
import { Box, Stack, Typography } from "@mui/material"
import { Videos } from './'
import ReactPlayer from "react-player"
import { CheckCircle } from "@mui/icons-material"


export const VideoDetail = () => {
  const { id } = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    (async () => {
      const videos = await FetchApi(`videos?part=snippet,statistics&id=${id}`)
      setVideos(videos.items[0])
      console.log(videos.items[0])
    })()
  }, [id])

  if(!videos?.snippet) return <span>Loading...</span>

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videos

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
            <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${id}`}
            className='react-player'
            controls
            />
            <Typography color='#CCC' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#CCC'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm:'subtitle1', md:'h6' }} color='#CCC'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize:'12px', color:'gray', ml:'5px' }}/>
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} visuaviewCountlizações
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}
