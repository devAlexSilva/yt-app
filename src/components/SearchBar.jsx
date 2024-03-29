import { Search } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SearchBar = () => {
  const [termToSearch, setTermToSearch] = useState('')
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if(termToSearch) {
      navigate(`/search/${termToSearch}`)

      setTermToSearch('')
    }
  }

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input
        className='search-bar'
        placeholder='pesquisar'
        value={termToSearch}
        onChange={(e) => setTermToSearch(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}
