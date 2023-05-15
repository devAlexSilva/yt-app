import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

export const VideoCard = ({ video }) => {
  const { videoId } = video.id
  const { snippet } = video
  console.log(snippet)
  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet.thumbnails.high.url}
          alt={snippet.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' color='#FFF' fontWeight='bold'>
            {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        
        <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' color='gray' fontWeight='bold'>
            {snippet.demoChannelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '6px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
