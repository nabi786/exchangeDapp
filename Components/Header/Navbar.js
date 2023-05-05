import { Box, Button, Typography, IconButton, Divider } from "@mui/material";
import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import logo from "./logo.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";

const CustomMenu = styled(Menu)(({ theme = useTheme() }) => ({
  "& 	.css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
    background: theme.palette.background.gradientColor,
    // background: "transparent",
    width: "100%",
    left: "0px !important",
    maxWidth: "100% !important",
    borderRadius: "0px !important",
    top: "70px !important",
  },
  "& .css-oapmtd": {
    background: theme.palette.background.gradientColor,
    width: "100%",
    left: "0px !important",
    maxWidth: "100% !important",
    borderRadius: "0px !important",
    top: "70px !important",
  },
}));

const Navbar = () => {
  let theme = useTheme();

  const [openMenu, setOpenMenu] = useState(false);

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { lg: "110px", md: "110px", sm: "75px", xs: "75px" },
          // backgroundColor: theme.palette.background.navbarBg,
        }}
      >
        <Box
          sx={{
            p: "5px",
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              pl: "45px",
            }}
          >
            <Image src={logo} width={290} height={100} alt="No Logo Found" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box>
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: theme.palette.background.navBarBtnSecondaryColor,
                  "&:hover": {
                    color: theme.palette.background.default,
                  },
                }}
              >
                App
              </Button>
            </Box>
            <Box
              sx={{
                ml: "10px",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: theme.palette.background.navBarBtnSecondaryColor,
                  "&:hover": {
                    color: theme.palette.background.default,
                  },
                }}
              >
                Product
              </Button>
            </Box>
            <Box
              sx={{
                ml: "10px",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: theme.palette.background.navBarBtnSecondaryColor,
                  "&:hover": {
                    color: theme.palette.background.default,
                  },
                }}
              >
                Build
              </Button>
            </Box>
            <Box
              sx={{
                ml: "10px",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: theme.palette.background.navBarBtnSecondaryColor,
                  "&:hover": {
                    color: theme.palette.background.default,
                  },
                }}
              >
                Careers
              </Button>
            </Box>
            <Box
              sx={{
                ml: "10px",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: theme.palette.background.navBarBtnSecondaryColor,
                  "&:hover": {
                    color: theme.palette.background.default,
                  },
                }}
              >
                About
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              pr: "70px",
            }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                textTransform: "capitalize",
                color: theme.palette.background.default,
                borderColor: theme.palette.background.navBarBtnStyledColor,
                "&:hover": {
                  backgroundColor:
                    theme.palette.background.navBarBtnStyledColor,
                  color: theme.palette.background.navbarBg,
                },
                borderRadius: "20px",
              }}
            >
              Enter App
            </Button>
          </Box>
        </Box>

        {/* For mobile View */}
        <Box
          sx={{
            display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            p: "5px",
          }}
        >
          <Box
            sx={{
              pl: "10px",
            }}
          >
            <Image src={logo} width={160} height={70} alt="No Logo Found" />
          </Box>
          <Box>
            <IconButton
              sx={{
                color: theme.palette.background.navBarBtnStyledColor,
              }}
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu === true ? (
                <CancelPresentationOutlinedIcon sx={{ fontSize: "35px" }} />
              ) : (
                <MenuIcon sx={{ fontSize: "35px" }} />
              )}
            </IconButton>
          </Box>
        </Box>

        {/* Menu For mobile Responsive view */}
        <Box
          sx={{
            width: "100%",
          }}
        >
          <CustomMenu
            open={openMenu}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem
              sx={{
                // width: "100vw",
                // color: theme.palette.background.navBarBtnSecondaryColor,
                color: theme.palette.background.default,
              }}
            >
              App
            </MenuItem>
            <Divider
              sx={{ backgroundColor: theme.palette.background.default }}
            />
            <MenuItem
              sx={{
                color: theme.palette.background.default,
              }}
            >
              Products
            </MenuItem>
            <Divider
              sx={{ backgroundColor: theme.palette.background.default }}
            />
            <MenuItem
              sx={{
                color: theme.palette.background.default,
              }}
            >
              Build
            </MenuItem>
            <Divider
              sx={{ backgroundColor: theme.palette.background.default }}
            />
            <MenuItem
              sx={{
                color: theme.palette.background.default,
              }}
            >
              Careers
            </MenuItem>
            <Divider
              sx={{ backgroundColor: theme.palette.background.default }}
            />
            <MenuItem
              sx={{
                color: theme.palette.background.default,
              }}
            >
              About
            </MenuItem>
          </CustomMenu>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
