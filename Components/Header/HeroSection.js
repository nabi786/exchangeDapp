import { Box, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Style from "./Header.module.css";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box className={Style.MainBox}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Navbar />
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "75px", md: "75px", sm: "70px", xs: "46px" },
                  fontWeight: 600,
                }}
              >
                World's <span className={Style.HeroTxt}> Independent</span>
                <br />
                Exchange
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "35px", md: "35px", sm: "30px", xs: "auto" },
                  fontWeight: 600,
                  mt: "40px",
                }}
              >
                Layer One Cross-Chain for everyone
              </Typography>
              <Box
                sx={{
                  width: "300px",
                  height: "50px",
                  background:
                    "linear-gradient(135deg, #7B4FE8 30%, #4DBAD6 70%)",
                  borderRadius: "80px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "30px",
                }}
              >
                <Box
                  sx={{
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "20px",
                      xs: "auto",
                    },
                    fontWeight: 600,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      mr: "50px",
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "20px",
                        xs: "auto",
                      },
                      fontWeight: 600,
                    }}
                  >
                    Start Explore
                  </Typography>
                  <Box className={Style.container}>
                    <span className={Style.word}> WixCare</span>
                    <span className={Style.word}> TradeWix</span>
                    <span className={Style.word}> WixChain</span>
                    <span className={Style.word}>WixPad</span>
                  </Box>
                </Box>
              </Box>
              {/* <Box>
                <IconButton>
                  
                </IconButton>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
