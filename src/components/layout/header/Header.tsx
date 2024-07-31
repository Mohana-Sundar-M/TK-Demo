import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { memo, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../../modals/search/Search";
import Location from "../../modals/location/Location";
import { useNavigate } from "react-router-dom";

const menuItem = [
  { name: "Home", link: "/" },
  { name: "Movies", link: "/movies" },
  { name: "Theater", link: "/theater" },
  { name: "Profile", link: "/profile" },
];

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSearchModal = () => {
    setOpenSearch(false);
  };
  const handleLocationModal = () => {
    setOpenLocation(false);
  };

  const handleNavigation = (item: { name: string; link: string }) => {
    navigate(item.link);
    handleClose();
  };

  return (
    <Box className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between py-4 px-6 bg-white shadow-md">
      {openSearch && (
        <Search open={openSearch} handleModal={handleSearchModal} />
      )}
      {openLocation && (
        <Location open={openLocation} handleModal={handleLocationModal} />
      )}

      <img src="" alt="logo" className="h-10 w-auto" />
      <Box className="flex items-center gap-4">
        <Button
          variant="contained"
          className="hidden sm:block h-12"
          color="primary"
          onClick={() => setOpenSearch(true)}
        >
          Search
        </Button>
        <Button
          variant="contained"
          className="hidden sm:block h-12"
          color="primary"
          onClick={() => setOpenLocation(true)}
        >
          Select Location
        </Button>
        <Button
          variant="contained"
          className="hidden sm:block h-12"
          color="primary"
          onClick={handleSignIn}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          className="h-12"
          color="primary"
          onClick={handleClick}
        >
          <MenuIcon fontSize="large" />
        </Button>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItem.map((item) => (
          <MenuItem key={item.name} onClick={() => handleNavigation(item)}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default memo(Header);
