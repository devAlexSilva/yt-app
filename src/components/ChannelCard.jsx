import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { demoChannelUrl } from '../utils/constants'
import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

export const ChannelCard = ({ channelDetails, marginTop }) => {
  
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { md: '320px', xs: '356px' },
      height: '326px',
      margin: 'auto',
      marginTop: marginTop
    }}>
      <Link to={`/channel/${channelDetails.id}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}>
          <CardMedia
            image={channelDetails.snippet?.thumbnails.high.url || demoChannelUrl}
            alt={channelDetails.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />

          <Typography variant='h6'>
            {channelDetails.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '6px' }} />
          </Typography>

          {channelDetails.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetails.statistics?.subscriberCount).toLocaleString()} Inscritos
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}
