import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

export const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction='row' sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: "column" } }}>
      {categories.map(category => (
        <button 
        key={category.name} 
        className='category-btn' 
        style={{
          background: category.name === selectedCategory && '#FC1503',
          color: '#FFF'
        }}
        onClick={() => setSelectedCategory(category.name)}
        >
          <span style={{ color: category.name === selectedCategory ? '#FFF' : '#FC1503', marginRight: '15px' }}>
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}
