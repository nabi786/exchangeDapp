import {
  Box,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CssTextField = styled(TextField)({
  // marginTop: '10px',
  height: "50px",
  "& label.Mui-focused": {
    color: "white",
    height: "50px",
  },

  "& .MuiOutlinedInput-root": {
    height: "50px",
    "& fieldset": {
      borderColor: "white",
      color: "white",
      height: "50px",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:before": {
      color: "white",
      height: "50px",
      // background: "#414141",
    },

    "&:hover fieldset": {
      borderColor: "white",
      height: "50px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
      height: "50px",
    },
    "&  #customID": {
      color: "white",
      height: "50px",
      top: "-20px",
    },
  },
});

const Stake = () => {
  let theme = useTheme();
  const [percentage, setPercentage] = useState("0.5");
  const [amount, setAmount] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          width: { lg: "45%", md: "45%", sm: "45%", xs: "auto" },
          background: "linear-gradient(260deg, #364569 0%, #222D48 100%)",
          p: "30px",
          borderRadius: "16px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { lg: "30px", md: "29px", sm: "28px", xs: "auto" },
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Stake WIX Token & get upto 15% APY
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mt: "20px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "transparent",
              border: `1px solid ${theme.palette.background.navBarBtnStyledColor}`,
              color: theme.palette.background.default,
              textTransform: "capitalize",
              "&:focus": {
                background: theme.palette.background.gradientColor,
                color: theme.palette.background.default,
                border: "none",
                "&:hover": {
                  color: theme.palette.background.default,
                },
              },
              "&:hover": {
                backgroundColor: theme.palette.background.navBarBtnStyledColor,
                color: theme.palette.background.navbarBg,
              },
            }}
            onClick={() => setPercentage("0.5")}
          >
            7 Days
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "transparent",
              border: `1px solid ${theme.palette.background.navBarBtnStyledColor}`,
              color: theme.palette.background.default,
              textTransform: "capitalize",
              "&:focus": {
                background: theme.palette.background.gradientColor,
                color: theme.palette.background.default,
                border: "none",
                "&:hover": {
                  color: theme.palette.background.default,
                },
              },
              "&:hover": {
                backgroundColor: theme.palette.background.navBarBtnStyledColor,
                color: theme.palette.background.navbarBg,
              },
            }}
            onClick={() => setPercentage("1")}
          >
            14 Days
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "transparent",
              border: `1px solid ${theme.palette.background.navBarBtnStyledColor}`,
              color: theme.palette.background.default,
              textTransform: "capitalize",
              "&:focus": {
                background: theme.palette.background.gradientColor,
                color: theme.palette.background.default,
                border: "none",
                "&:hover": {
                  color: theme.palette.background.default,
                },
              },
              "&:hover": {
                backgroundColor: theme.palette.background.navBarBtnStyledColor,
                color: theme.palette.background.navbarBg,
              },
            }}
            onClick={() => setPercentage("3")}
          >
            30 Days
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "transparent",
              border: `1px solid ${theme.palette.background.navBarBtnStyledColor}`,
              color: theme.palette.background.default,
              textTransform: "capitalize",
              "&:focus": {
                background: theme.palette.background.gradientColor,
                color: theme.palette.background.default,
                border: "none",
                "&:hover": {
                  color: theme.palette.background.default,
                },
              },
              "&:hover": {
                backgroundColor: theme.palette.background.navBarBtnStyledColor,
                color: theme.palette.background.navbarBg,
              },
            }}
            onClick={() => setPercentage("5")}
          >
            60 Days
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "transparent",
              border: `1px solid ${theme.palette.background.navBarBtnStyledColor}`,
              color: theme.palette.background.default,
              textTransform: "capitalize",
              "&:focus": {
                background: theme.palette.background.gradientColor,
                color: theme.palette.background.default,
                border: "none",
                "&:hover": {
                  color: theme.palette.background.default,
                },
              },
              "&:hover": {
                backgroundColor: theme.palette.background.navBarBtnStyledColor,
                color: theme.palette.background.navbarBg,
              },
            }}
            onClick={() => setPercentage("8")}
          >
            90 Days
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "transparent",
              border: `1px solid ${theme.palette.background.navBarBtnStyledColor}`,
              color: theme.palette.background.default,
              textTransform: "capitalize",
              "&:focus": {
                background: theme.palette.background.gradientColor,
                color: theme.palette.background.default,
                border: "none",
                "&:hover": {
                  color: theme.palette.background.default,
                },
              },
              "&:hover": {
                backgroundColor: theme.palette.background.navBarBtnStyledColor,
                color: theme.palette.background.navbarBg,
              },
            }}
            onClick={() => setPercentage("15")}
          >
            180 Days
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "30px",
          }}
        >
          <Box>
            <Typography
              sx={{ color: theme.palette.background.navBarBtnSecondaryColor }}
            >
              Your Staked WIX: 0 WIX
            </Typography>
            <Typography
              sx={{ color: theme.palette.background.navBarBtnSecondaryColor }}
            >
              Total Staked: 0 WIX
            </Typography>
            <Typography
              sx={{ color: theme.palette.background.navBarBtnSecondaryColor }}
            >
              My Balance: 0 WIX
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { lg: "30px", md: "29px", sm: "28px", xs: "auto" },
                fontWeight: 700,
                textAlign: "center",
                color: theme.palette.background.navBarBtnSecondaryColor,
              }}
            >
              {percentage}%
            </Typography>
            <Typography
              sx={{
                color: theme.palette.background.navBarBtnSecondaryColor,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              APY*
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <CssTextField
              type="text"
              variant="outlined"
              placeholder="1000"
              fullWidth
              id="customID"
              autoComplete={false}
              autoHighlight={false}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "white", fontSize: "16px" }}
                      onClick={() => setAmount("100000")}
                    >
                      Max
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: { lg: "410px", md: "300px", sm: "200px", xs: "auto" },
              }}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                background: theme.palette.background.gradientColor,
                color: theme.palette.background.default,
                textTransform: "capitalize",
                height: { lg: "50px", md: "50px", sm: "48px", xs: "48px" },
                "&:hover": {
                  backgroundColor:
                    theme.palette.background.navBarBtnStyledColor,
                  color: theme.palette.background.navbarBg,
                },
              }}
              size="large"
            >
              Stake
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            alignItems: "center",
            justifyContent: "center",
            mt: "30px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: theme.palette.background.gradientColor,
              color: theme.palette.background.default,
              textTransform: "capitalize",
              height: "50px",
              "&:hover": {
                backgroundColor: theme.palette.background.navBarBtnStyledColor,
                color: theme.palette.background.navbarBg,
              },
            }}
            size="large"
          >
            Unstake after time period
          </Button>

          <Button
            variant="contained"
            sx={{
              background: theme.palette.background.gradientColor,
              color: theme.palette.background.default,
              textTransform: "capitalize",
              height: "50px",
              ml: "20px",
              mt: { lg: "0px", md: "0px", sm: "0px", xs: "20px" },
              "&:hover": {
                backgroundColor: theme.palette.background.navBarBtnStyledColor,
                color: theme.palette.background.navbarBg,
              },
            }}
            size="large"
          >
            Rewards
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            width: { lg: "660px", md: "450px", sm: "300px", xs: "100%" },
          }}
        >
          <img
            src="./Images/2.png"
            width="100%"
            height="100%"
            alt="not found"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Stake;
