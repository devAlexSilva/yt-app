import { Box, Stack } from "@mui/material"
import { VideoCard } from "./"


export const Videos = ({ videos, direction }) => {

  return (
    <Stack flexDirection={direction || 'row'} flexWrap='wrap' justifyContent='start' alignItems='start' gap={1.5}>
      {
        videos.map((video, i) => (
          <Box key={i}>
            {video.id?.videoId && <VideoCard video={video} />}
          </Box>
        ))
      }
    </Stack>
  )
}
