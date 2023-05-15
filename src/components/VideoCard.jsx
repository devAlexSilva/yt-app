import { Card, CardMedia } from '@mui/material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
import { Link } from 'react-router-dom'

export const VideoCard = ({ video }) => {
  const { videoId } = video.id
  const { snippet } = video
  console.log(snippet)
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet.thumbnails.high.url}
          alt={snippet.title}
          sx={{ height: 358, width: 180 }}
        />
      </Link>
    </Card>
  )
}
