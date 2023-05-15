import { Box, Stack } from "@mui/material"
import { VideoCard, ChannelCard } from "./"


export const Videos = ({ videos }) => {
  return (
    <Stack flexDirection={'row'} flexWrap={'wrap'} justifyContent={'start'} gap={2}>
      {
        videos.map((video, i) => (
          <Box key={i}>
            {video.id?.videoId && <VideoCard video={video} />}
            {video.id?.ChannelId && <ChannelCard channelDetails={video} />}
          </Box>
        ))
      }
    </Stack>
  )
}