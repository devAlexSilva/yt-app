import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FetchApi } from "../utils/fetchFromApi"
import { Box } from "@mui/material"
import { ChannelCard } from "./"
import { Videos } from './'

export const ChannelDetail = () => {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [videos, setVideos] = useState([])

  useEffect(() => {
    (async () => {
      const details = await FetchApi(`channels?part=snippet%2Cstatistics&id=${id}`)
      setDetails(details.items[0])

      const videos = await FetchApi(`search?channelId=${id}&part=snippet&order=date`)
      setVideos(videos.items)

    })()
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        {console.log(details)}
        <ChannelCard channelDetails={details} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}
