import axios from 'axios'

const baseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    regionCode: 'BR',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const FetchApi = async (endpoint) => {
  const { data } = await axios.get(`${baseUrl}/${endpoint}`,options)
  return data
}