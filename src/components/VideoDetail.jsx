import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FetchApi } from "../utils/fetchFromApi"
import { Box, Stack, Typography } from "@mui/material"
import { Videos } from './'
import ReactPlayer from "react-player"
import { CheckCircle } from "@mui/icons-material"


export const VideoDetail = () => {
  const { id } = useParams()
  const [video, setVideo] = useState([])
  const [relatedVideos, setRelatedVideos] = useState([])

  useEffect(() => {
    (async () => {
      const video = await FetchApi(`videos?part=snippet,statistics&id=${id}`)
      setVideo(video.items[0])

      const relatedVideos = await FetchApi(`search?relatedToVideoId=${id}&part=snippet&type=video`)
      setRelatedVideos(relatedVideos.items)
      console.log(relatedVideos.items)
    })()
  }, [id])

  if (!video?.snippet) return <span>Loading...</span>

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = video

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography color='#CCC' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#CCC' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#CCC'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} visualizações
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={relatedVideos} direction='column' />
        </Box>
      </Stack>

    </Box>
  )
}
