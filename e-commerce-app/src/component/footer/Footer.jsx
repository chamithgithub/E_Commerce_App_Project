
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-[100] left-0 w-full p-5 bg-[#efc3c3] flex items-center justify-between drop-shadow-header-shadow">
    <IconButton> <HomeOutlinedIcon /></IconButton>
    <IconButton> <AppsIcon /></IconButton>
    </footer>
  )
}

export default Footer
