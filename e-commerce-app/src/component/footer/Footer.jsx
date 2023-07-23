import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-[100] left-0 w-full py-1 px-2 bg-[#efc3c3] flex items-center justify-between drop-shadow-header-shadow">
      <IconButton>
        {" "}
        <HomeOutlinedIcon />
        <p>Home</p>
      </IconButton>
      <IconButton>
        {" "}
        <AppsIcon />
        <p>Category</p>
      </IconButton>
      <IconButton>
        {" "}
        <PersonOutlineIcon />
        <p>Profile</p>
      </IconButton>
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon }) => (
  <IconButton
           sx={{
          color: "red",
          padding: "4px",
          borderRadius: "5px",
        }}
  >
    <div>
      <Icon />
      <p className="text-xs">Home</p>
    </div>
  </IconButton>
);
