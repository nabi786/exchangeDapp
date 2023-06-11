import {
  Box,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppContext from "@/Config/AppContext";
import { useContext } from "react";
import { StakeWIXFun } from "../../blockChain/controler";
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
  const [error, setError] = useState("");
  const [successMsg, setSuccessMSG] = useState("");
  const walletConfig = useContext(AppContext);
  const [plan, setPlan] = useState(1);
  const [toggleColor, setToggleColor] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  // const [youStackedWix,setYouStackedWix] = useState(0)

  const handleColor = () => {
    if (plan >= 1) {
      setToggleColor(true);
    }
  };

  var { stakeWix, unStakeBeforeTimeFun, getStakedDetails } = StakeWIXFun();

  useEffect(() => {
    const getStakedData = async () => {
      console.log("this is plan ", plan);
      var result = await getStakedDetails(plan);
      console.log("this is result0087 ", result);
      walletConfig.setStackedContext(result);
    };
    getStakedData();
    console.log("UseffectRunning");
  }, [walletConfig.walletAddressContext, plan,isSuccess]);

  // buttion to stack Wix
  const stakeWIXBTN = async () => {
    console.log("this is ContextApi", walletConfig.walletAddressContext);
    setError("");
    setSuccessMSG("");
    var isWalletConnected = false;
    if (walletConfig.walletAddressContext != "") {
      var result = await stakeWix(true, amount, plan);
      if (result.success) {
        console.log("result", result);
        setTimeout(()=>{
          setSuccess(!isSuccess)
        },8000)
        console.log("staked Successfully")
        setSuccessMSG(result.msg);
        setPlan(1);
      } else {
        setError(result.msg);
      }
    } else {
      setError("Connect Wallet First");
    }
  };

  //  unstake before time

  const unStakeBeforeTime = async () => {
    setError("");
    setSuccessMSG("");
    var result = await unStakeBeforeTimeFun(plan);

    if (result.success == true) {
      setSuccessMSG(result.msg);
    } else {
      setError(result.msg);
    }
  };

  const reStakeProfit = () => {
    console.log("reStake proffilt");
  };

  console.log("StackedValue", walletConfig.StackedContext);

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
            Stake WIX Token & get upto{" "}
            {walletConfig?.StackedContext
              ? walletConfig?.StackedContext?.get_apy
              : "0.0"}{" "}
            APY
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
              // background: "transparent",
              background: toggleColor
                ? "transparent"
                : theme.palette.background.gradientColor,
              border: toggleColor
                ? `1px solid ${theme.palette.background.navBarBtnStyledColor}`
                : "none",
              // border: `1px solid ${theme.palette.background.navBarBtnStyledColor}`,
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
            onClick={() => setPlan(1)}
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
            onClick={() => {
              setPlan(2);
              handleColor();
            }}
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
            onClick={() => {
              setPlan(3);
              handleColor();
            }}
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
            onClick={() => {
              setPlan(4);
              handleColor();
            }}
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
            onClick={() => {
              setPlan(5);
              handleColor();
            }}
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
            onClick={() => {
              setPlan(6);
              handleColor();
            }}
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
              Your Staked WIX:{" "}
              {walletConfig?.StackedContext
                ? `${walletConfig?.StackedContext?.yourStackedTokens} WIX`
                : "0 WIX"}
            </Typography>
            <Typography
              sx={{ color: theme.palette.background.navBarBtnSecondaryColor }}
            >
              Total Staked: {" "}
              {walletConfig?.StackedContext
                ? `${walletConfig?.StackedContext?.totalStacked} WIX`
                : "0 WIX"}
            </Typography>

            <Typography
              sx={{ color: theme.palette.background.navBarBtnSecondaryColor }}
            >
              {walletConfig?.balanceContext != ""
                ? `My Balance: ${walletConfig?.balanceContext} WIX`
                : "My Balance: 0 WIX"}
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
              {walletConfig?.StackedContext
                ? walletConfig?.StackedContext?.get_apy
                : "0.0"}
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
              onClick={stakeWIXBTN}
            >
              Stake
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "13px",
              color: "red",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {error}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              color: "white",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {successMsg}
          </Typography>
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
            onClick={unStakeBeforeTime}
          >
            Unstake before time period
          </Button>

          {/* <Button
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
            onClick={reStakeProfit}
          >
            Restake Profit
          </Button> */}
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
