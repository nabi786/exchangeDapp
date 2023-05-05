import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Style from ".././Header/Header.module.css";
import Stake from "../Stake/Stake";

const SelfCustody = () => {
  let theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        background: theme.palette.background.selfCustodyBgColor,
        color: theme.palette.background.default,
        pt: "40px",
      }}
    >
      <Box
        sx={{
          p: { lg: "60px", md: "60px", sm: "60px", xs: "15px" },
        }}
      >
        <Stake />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "space-between",
          p: { lg: "60px", md: "60px", sm: "60px", xs: "15px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { lg: "45px", md: "45px", sm: "40px", xs: "auto" },
              fontWeight: 700,
            }}
          >
            Full <span className={Style.HeroTxt}> Self-Custody</span>
          </Typography>
          <Typography
            sx={{
              color: theme.palette.background.navBarBtnSecondaryColor,
            }}
          >
            Swap from your own wallet. Be your own bank. No centralized bridges
            or wrapping assets
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              width: { lg: "660px", md: "450px", sm: "300px", xs: "100%" },
            }}
          >
            <img
              src="./Images/5.png"
              width="100%"
              height="100%"
              alt="not found"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelfCustody;
