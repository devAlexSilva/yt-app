import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { demonProfileContent } from '../utils/constants'
import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

export const ChannelCard = ({ channelDetails }) => {
  console.log(channelDetails)
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { md: '320px', xs: '356px' },
      height: '326px',
      margin: 'auto'
    }}>
      <Link to={`/channel/${channelDetails.id.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}>
          <CardMedia
            image={channelDetails.snippet.thumbnails.high.url || demonProfileContent}
            alt={channelDetails.snippet.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />

          <Typography variant='h6'>
            {channelDetails.snippet.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '6px' }} />
          </Typography>

          {channelDetails.statistics.subscriberCount && (
            <Typography>
              {parseInt(channelDetails.statistics.subscriberCount).toLocaleString()} Inscritos
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}
