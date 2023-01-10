import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/userSlice";
import { getUserLogin } from "../store/apiCalls";

const pages = ["Products"];
const settings = ["Account", "Logout"];

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userDetail = useSelector((state) => state.user.userDetail);

  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/auth");
    } else {
      getUserLogin(dispatch);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event, item) => {
    event.preventDefault();
    setAnchorElNav(null);
    router.push(`/${item.toLowerCase()}`);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "Logout") {
      handleLogout();
    } else if (setting === "Dashboard") {
      router.push("/admin");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    dispatch(setToken(null));
    router.push("/auth");
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            iBox
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={(event) => handleCloseNavMenu(event, page)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {userDetail ? (
                <div key={userDetail.role}>
                  <MenuItem
                    onClick={(event) => handleCloseNavMenu(event, "Favorites")}
                  >
                    <Typography textAlign="center">Favorites</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={(event) => handleCloseNavMenu(event, "Cart")}
                  >
                    <Typography textAlign="center">Cart</Typography>
                  </MenuItem>
                </div>
              ) : (
                <></>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            iBox
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, idx) => (
              <Button
                key={idx}
                onClick={(event) => handleCloseNavMenu(event, page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            {userDetail ? (
              <>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={(event) => handleCloseNavMenu(event, "Favorites")}
                >
                  <Typography textAlign="center">Favorites</Typography>
                </Button>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={(event) => handleCloseNavMenu(event, "Cart")}
                >
                  <Typography textAlign="center">Cart</Typography>
                </Button>
              </>
            ) : (
              <></>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userDetail?.role == "admin" ? (
                <MenuItem onClick={() => handleCloseUserMenu("Dashboard")}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
              ) : (
                <></>
              )}
              {settings.map((setting, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
