import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="fixed top-0 z-[100] left-0 w-full p-5 bg-[#efc3c3] flex items-center justify-between drop-shadow-header-shadow">
      {/* header left*/}
      <div className="flex items-center">
        <IconButton sx={{ color: "red" }}>
          <MenuIcon
            sx={{
              color: "blue",
            }}
          />
        </IconButton>
        <h1 className="ml-2 text-sm font-semibold">
          Chamith <span className="text-[#ff2727]">Dev</span>
        </h1>
        <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#e6dfd7]">
          <input
            type="text"
            placeholder="Search"
            className="hidden sm:inline-block outline-none ml-1 p-2 w-[200px] bg-inherit font-semibold text-sm"
          />
          <IconButton>
            <SearchIcon className="text-gray-400" />{" "}
          </IconButton>
        </div>
      </div>
      {/* header right*/}
      <IconButton>
        <ShoppingCartOutlinedIcon sx={{ color: "red" }} />
      </IconButton>
    </header>
  );
};

export default Header;
